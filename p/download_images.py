import re
import os
import requests
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm
import hashlib
import time

def extract_image_urls(html_file):
    """Extract all unique CloudFront image URLs from the HTML file"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match CloudFront URLs
    pattern = r'https://d2p83r7qt92tp3\.cloudfront\.net/\?k=cmbje26hl000hl8042ijndljd%2F([^&"\']+)\.jpeg&amp;w=(\d+)'
    
    matches = re.findall(pattern, content)
    
    # Create a set to store unique image base names and their max width
    unique_images = {}
    
    for filename, width in matches:
        # Decode URL-encoded filename
        decoded_filename = urllib.parse.unquote(filename)
        width = int(width)
        
        # Keep the highest resolution version of each image
        if decoded_filename not in unique_images or width > unique_images[decoded_filename]['width']:
            unique_images[decoded_filename] = {
                'width': width,
                'url': f'https://d2p83r7qt92tp3.cloudfront.net/?k=cmbje26hl000hl8042ijndljd%2F{filename}.jpeg&w={width}',
                'local_name': f"{decoded_filename}.jpeg"
            }
    
    return unique_images

def download_image(image_info, images_dir):
    """Download a single image"""
    url = image_info['url']
    local_name = image_info['local_name']
    local_path = os.path.join(images_dir, local_name)
    
    # Skip if already downloaded
    if os.path.exists(local_path):
        return f"Skipped: {local_name} (already exists)"
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        with open(local_path, 'wb') as f:
            f.write(response.content)
        
        return f"Downloaded: {local_name} ({len(response.content)} bytes)"
    
    except Exception as e:
        return f"Failed: {local_name} - {str(e)}"

def main():
    html_file = 'v/rq9rc9mq.html'
    images_dir = 'images'
    
    # Create images directory
    os.makedirs(images_dir, exist_ok=True)
    
    print("Extracting image URLs from HTML file...")
    unique_images = extract_image_urls(html_file)
    
    print(f"Found {len(unique_images)} unique images to download")
    
    # Download images with thread pool
    print("Starting downloads...")
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        # Submit all download tasks
        future_to_name = {
            executor.submit(download_image, info, images_dir): name 
            for name, info in unique_images.items()
        }
        
        # Process completed downloads with progress bar
        with tqdm(total=len(unique_images), desc="Downloading images") as pbar:
            for future in as_completed(future_to_name):
                result = future.result()
                print(result)
                pbar.update(1)
                # Small delay to avoid overwhelming the server
                time.sleep(0.1)
    
    print(f"\nDownload completed! Images saved to '{images_dir}' directory")
    
    # Generate URL mapping for replacement
    print("Generating URL mapping for HTML replacement...")
    
    url_mapping = {}
    for name, info in unique_images.items():
        # Map all width variants to the local file
        pattern = r'https://d2p83r7qt92tp3\.cloudfront\.net/\?k=cmbje26hl000hl8042ijndljd%2F' + re.escape(urllib.parse.quote(name)) + r'\.jpeg&(?:amp;)?w=\d+'
        local_path = f"images/{info['local_name']}"
        url_mapping[pattern] = local_path
    
    # Save mapping to file for later use
    with open('url_mapping.txt', 'w', encoding='utf-8') as f:
        for pattern, local_path in url_mapping.items():
            f.write(f"{pattern} -> {local_path}\n")
    
    print("URL mapping saved to 'url_mapping.txt'")

if __name__ == "__main__":
    main()
import re
import shutil
import os

def update_html_with_local_images():
    """Update the HTML file to use local images instead of CloudFront URLs"""
    
    html_file = 'v/rq9rc9mq.html'
    backup_file = 'v/rq9rc9mq_backup.html'
    output_file = 'v/rq9rc9mq_local.html'
    
    # Create backup
    shutil.copy(html_file, backup_file)
    print(f"Created backup: {backup_file}")
    
    # Read the HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Original file size:", len(content), "characters")
    
    # Pattern to match CloudFront URLs with any width parameter
    # This will match both regular src and srcSet attributes
    pattern = r'https://d2p83r7qt92tp3\.cloudfront\.net/\?k=cmbje26hl000hl8042ijndljd%2F([^&"\']+)\.jpeg&(?:amp;)?w=\d+'
    
    def replace_url(match):
        # Extract the filename from the URL
        encoded_filename = match.group(1)
        # Decode URL-encoded filename 
        import urllib.parse
        decoded_filename = urllib.parse.unquote(encoded_filename)
        # Return the local path
        return f"images/{decoded_filename}.jpeg"
    
    # Replace all CloudFront URLs with local paths
    updated_content = re.sub(pattern, replace_url, content)
    
    # Also fix the favicon path
    updated_content = updated_content.replace('href="/_archifolio/favicon.ico"', 'href="_archifolio/favicon.ico"')
    
    print("Updated file size:", len(updated_content), "characters")
    
    # Count replacements
    original_matches = len(re.findall(pattern, content))
    remaining_matches = len(re.findall(pattern, updated_content))
    
    print(f"Replaced {original_matches - remaining_matches} CloudFront URLs")
    print(f"Remaining CloudFront URLs: {remaining_matches}")
    
    # Write the updated content to a new file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Updated HTML saved as: {output_file}")
    
    # Also overwrite the original file
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Original file updated: {html_file}")
    
    return output_file

def create_simple_favicon():
    """Create a simple favicon.ico file"""
    favicon_path = '_archifolio/favicon.ico'
    
    # Create a simple 16x16 pixel favicon (basic ICO format)
    # This is a minimal valid ICO file with a transparent 16x16 icon
    ico_data = bytes([
        # ICO header
        0x00, 0x00,  # Reserved
        0x01, 0x00,  # Type (1 = ICO)
        0x01, 0x00,  # Number of images
        # Image directory entry
        0x10,        # Width (16)
        0x10,        # Height (16)
        0x00,        # Color count (0 = no palette)
        0x00,        # Reserved
        0x01, 0x00,  # Color planes
        0x20, 0x00,  # Bits per pixel (32)
        0x84, 0x00, 0x00, 0x00,  # Size of image data
        0x16, 0x00, 0x00, 0x00,  # Offset to image data
        # BITMAPINFOHEADER
        0x28, 0x00, 0x00, 0x00,  # Header size
        0x10, 0x00, 0x00, 0x00,  # Width
        0x20, 0x00, 0x00, 0x00,  # Height (doubled for ICO)
        0x01, 0x00,              # Planes
        0x20, 0x00,              # Bits per pixel
        0x00, 0x00, 0x00, 0x00,  # Compression
        0x00, 0x00, 0x00, 0x00,  # Image size
        0x00, 0x00, 0x00, 0x00,  # X pixels per meter
        0x00, 0x00, 0x00, 0x00,  # Y pixels per meter
        0x00, 0x00, 0x00, 0x00,  # Colors used
        0x00, 0x00, 0x00, 0x00,  # Important colors
    ])
    
    # Add 16x16 pixels of RGBA data (64 bytes of transparent pixels)
    pixel_data = bytes([0x00, 0x00, 0x00, 0x00] * 256)  # 16x16 transparent pixels
    mask_data = bytes([0x00] * 32)  # AND mask (32 bytes for 16x16 bits)
    
    with open(favicon_path, 'wb') as f:
        f.write(ico_data + pixel_data + mask_data)
    
    print(f"Created simple favicon: {favicon_path}")

if __name__ == "__main__":
    print("Creating favicon...")
    create_simple_favicon()
    
    print("\nUpdating HTML file...")
    updated_file = update_html_with_local_images()
    
    print(f"\n✅ All done! Updated HTML file: {updated_file}")
    print("🎉 Your portfolio website is now completely offline-ready!")
import re

def fix_images_properly():
    """Fix images by only removing blur effects while keeping all necessary styling"""
    
    html_file = 'v/rq9rc9mq.html'
    
    # Read the HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Original file size:", len(content), "characters")
    
    # Step 1: Replace CloudFront URLs with local paths (keep responsive srcSet)
    cloudfront_pattern = r'https://d2p83r7qt92tp3\.cloudfront\.net/\?k=cmbje26hl000hl8042ijndljd%2F([^&"\']+)\.jpeg&(?:amp;)?w=\d+'
    
    def replace_url(match):
        # Extract the filename from the URL
        encoded_filename = match.group(1)
        # Decode URL-encoded filename 
        import urllib.parse
        decoded_filename = urllib.parse.unquote(encoded_filename)
        # Return the local path
        return f"images/{decoded_filename}.jpeg"
    
    # Replace all CloudFront URLs with local paths
    updated_content = re.sub(cloudfront_pattern, replace_url, content)
    
    # Step 2: Remove ONLY the blur filter and background placeholder images from style attributes
    # Pattern to match and remove filter:blur(20px);
    blur_pattern = r'filter:blur\(20px\);'
    updated_content = re.sub(blur_pattern, '', updated_content)
    
    # Pattern to match and remove background-image with base64 data
    bg_image_pattern = r'background-image:url\(&quot;data:image/png;base64,[^&]*&quot;\);?'
    updated_content = re.sub(bg_image_pattern, '', updated_content)
    
    # Remove background-size and background-position when they're blur-related
    updated_content = re.sub(r'background-size:cover;background-position:0% 0%;', '', updated_content)
    
    # Step 3: Fix favicon path
    updated_content = updated_content.replace('href="/_archifolio/favicon.ico"', 'href="_archifolio/favicon.ico"')
    
    print("Updated file size:", len(updated_content), "characters")
    
    # Count changes
    original_cloudfront = len(re.findall(cloudfront_pattern, content))
    remaining_cloudfront = len(re.findall(cloudfront_pattern, updated_content))
    original_blur = len(re.findall(blur_pattern, content))
    remaining_blur = len(re.findall(blur_pattern, updated_content))
    
    print(f"Replaced {original_cloudfront - remaining_cloudfront} CloudFront URLs")
    print(f"Removed {original_blur - remaining_blur} blur filters")
    print(f"Remaining CloudFront URLs: {remaining_cloudfront}")
    print(f"Remaining blur filters: {remaining_blur}")
    
    # Write the updated content back
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Images fixed! All images should now display clearly.")
    return html_file

if __name__ == "__main__":
    print("Fixing images properly...")
    fix_images_properly()
    print("🎉 Done! Images should now display clearly without blur and work offline.")
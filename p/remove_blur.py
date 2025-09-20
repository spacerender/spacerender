import re

def remove_blur_filters():
    """Remove blur filters from all images in the HTML file"""
    
    html_file = 'v/rq9rc9mq.html'
    
    # Read the HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Original file size:", len(content), "characters")
    
    # Pattern to match the filter:blur(20px) in style attributes
    blur_pattern = r'filter:blur\(20px\);'
    
    # Count original blur filters
    original_blur_count = len(re.findall(blur_pattern, content))
    print(f"Found {original_blur_count} blur filters to remove")
    
    # Remove blur filters
    updated_content = re.sub(blur_pattern, '', content)
    
    # Pattern to match the background-image data URLs (which are also blur placeholders)
    bg_image_pattern = r'background-image:url\(&quot;data:image/png;base64,[^&]*&quot;\);?'
    
    # Count background placeholder images
    bg_image_count = len(re.findall(bg_image_pattern, updated_content))
    print(f"Found {bg_image_count} background placeholder images to remove")
    
    # Remove background placeholder images
    updated_content = re.sub(bg_image_pattern, '', updated_content)
    
    # Also remove background-size and background-position related to blur placeholders
    updated_content = re.sub(r'background-size:cover;background-position:0% 0%;', '', updated_content)
    
    print("Updated file size:", len(updated_content), "characters")
    
    # Count remaining blur filters
    remaining_blur_count = len(re.findall(blur_pattern, updated_content))
    remaining_bg_count = len(re.findall(bg_image_pattern, updated_content))
    
    print(f"Removed {original_blur_count - remaining_blur_count} blur filters")
    print(f"Removed {bg_image_count - remaining_bg_count} background placeholder images")
    print(f"Remaining blur filters: {remaining_blur_count}")
    
    # Write the updated content back
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ All blur filters removed! Images should now be crystal clear.")
    return html_file

if __name__ == "__main__":
    print("Removing blur filters from images...")
    remove_blur_filters()
    print("🎉 Done! All images should now display clearly without blur.")
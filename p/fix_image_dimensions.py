#!/usr/bin/env python3
"""
Script to fix image dimensions in offline portfolio
Removes width:0;height:0 from image styles to make images visible
"""

import re
import os

def fix_image_dimensions():
    html_file = 'v/rq9rc9mq.html'
    
    if not os.path.exists(html_file):
        print(f"❌ File {html_file} not found!")
        return
    
    print("🔧 Fixing image dimensions...")
    
    # Read the HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_size = len(content)
    print(f"Original file size: {original_size} characters")
    
    # Pattern to fix the image dimensions issue
    # Replace width:0;height:0; with width:100%;height:100%;
    dimension_fixes = 0
    
    # Fix the main responsive image dimensions
    pattern = r'(style="[^"]*?)width:0;height:0;([^"]*min-width:100%;max-width:100%;min-height:100%;max-height:100%;[^"]*?")'
    matches = list(re.finditer(pattern, content))
    
    if matches:
        print(f"Found {len(matches)} images with dimension issues")
        # Replace width:0;height:0; with width:100%;height:100%;
        content = re.sub(pattern, r'\1width:100%;height:100%;\2', content)
        dimension_fixes = len(matches)
    
    updated_size = len(content)
    print(f"Updated file size: {updated_size} characters")
    
    # Write the updated content back
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed {dimension_fixes} image dimension issues")
    
    # Verify the fix
    remaining_zero_dimensions = len(re.findall(r'width:0;height:0;', content))
    print(f"Remaining zero-dimension images: {remaining_zero_dimensions}")
    
    if dimension_fixes > 0:
        print("✅ Image dimensions fixed! Images should now be visible.")
    else:
        print("ℹ️  No dimension issues found to fix.")
    
    print("🎉 Done! Images should now display properly without being invisible.")

if __name__ == "__main__":
    fix_image_dimensions()
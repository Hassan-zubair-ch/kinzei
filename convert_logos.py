import os
import sys

logos_dir = r"c:\Users\user 2025\Music\kinzei\client\public\logos"

try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM

    print("Converting vector SVGs to high-resolution PNGs...")
    for name in ["fbr", "secp", "icap", "irs", "hmrc"]:
        svg_file = os.path.join(logos_dir, f"{name}.svg")
        png_file = os.path.join(logos_dir, f"{name}.png")

        if os.path.exists(svg_file):
            drawing = svg2rlg(svg_file)
            if drawing:
                # Scale up by 4x for ultra HD resolution
                drawing.width = drawing.width * 4
                drawing.height = drawing.height * 4
                drawing.scale(4, 4)
                renderPM.drawToFile(drawing, png_file, fmt="PNG")
                print(f"✓ Generated HD PNG: {name}.png ({int(drawing.width)}x{int(drawing.height)} px)")
            else:
                print(f"Failed to parse {name}.svg")
except Exception as err:
    print("Error during conversion:", err)

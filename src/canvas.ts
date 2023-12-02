import { createCanvas } from 'canvas';
import fs from 'fs';

// Save the pixels as an image (Each entry in the array is a row of pixels { r, g, b })
export function saveImage (pixels: Array<Array<{ r: number, g: number, b: number }>>) {
  const canvasHeight = pixels.length;
  const canvasWidth = pixels[0].length;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  for (const [y, row] of pixels.entries()) {
    for (const [x, pixel] of row.entries()) {
      ctx.fillStyle = `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  const out = fs.createWriteStream('out.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  out.on('finish', () => {
    console.log('Image saved as out.png');
  });
}

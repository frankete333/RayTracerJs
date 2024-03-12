import { saveImage } from './canvas';

function main() {
  // randomImage(100, 100);
  mandelbrotFractal(10000, 10000);
}

function randomImage(width: number, height: number) {
  const pixels = [];

  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {
      row.push({
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
      });
    }

    pixels.push(row);
  }

  saveImage(pixels);
}

// node --max-old-space-size=8192 ./lib/main.js (when running out of memory)
function mandelbrotFractal(width: number, height: number) {
  // Mandelbort is defined between -2 and 0.47 in X and between -1.12 and 1.12 in Y
  const pixels = [];
  const yIncrement = 2.24 / height;
  const xIncrement = 2.47 / width;

  for (let y = -1.12; y < 1.12; y = y + yIncrement) {
    const row = [];

    for (let x = -2; x < 0.47; x = x + xIncrement) {
      row.push(mandelbrotPixel(x, y));
    }

    pixels.push(row);
  }

  saveImage(pixels);
}

function mandelbrotPixel(x0: number, y0: number) {
  let iter = 0;
  let x = 0;
  let y = 0;
  const maxIter = 100;

  while ((x*x + y*y) <= 4 && iter < maxIter) {
    const xTemp = x*x - y*y + x0;
    y = 2*x*y + y0;
    x = xTemp;
    iter++;
  }

  if (iter === maxIter) {
    return { r: 0, g: 0, b: 0 };
  }

  const ratio = iter / maxIter;

  if (ratio > 0.5) {
    return { r: Math.floor(255 * ratio), g: 255, b: Math.floor(255 * ratio) };
  } else {
    return { r: 0, g: Math.floor(255 * ratio), b: 0 };
  }
}

main();

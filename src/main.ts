import { saveImage } from './canvas';

function main() {
  // randomImage(100, 100);
  mandelbrotFractal(50, 50);
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

function mandelbrotFractal(width: number, height: number) {
  // Mandelbort is defined between -2 and 0.47 in X and between -1.12 and 1.12 in Y
  const pixels = [];
  let yIncrement = 2.24 / height;
  let xIncrement = 2.47 / width;

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

  while ((x*x + y*y) <= 4 && iter < 1000) {
    let xtemp = x*x - y*y + x0
    y = 2*x*y + y0
    x = xtemp
    iter++; 
  }

  if (iter === 1000) {
    return { r: 0, g: 0, b: 0 };
  }

  return { r: 0.255 * iter, g: 255, b: 0.255 * iter }
}

main();

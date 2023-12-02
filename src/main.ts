import { saveImage } from './canvas';

function main () {
  randomImage();
}

function randomImage () {
  const width = 100;
  const height = 100;
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

main();

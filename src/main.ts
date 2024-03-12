import { saveImage } from './canvas';
import { Point3 } from './vec3';

function main () {
  const point = Point3.random();
  const point2 = Point3.random();
  const point3 = point.add(point2);
  console.log(point3.x, point3.y, point3.z);

  const width = 256;
  const height = 256;
  const pixels = [];

  for (let y = 0; y < height; y++) {
    const row = [];
    console.log(`Scanlines remaining: ${height - y}`);
    for (let x = 0; x < width; x++) {

      row.push({
        r: Math.floor((x / (width - 1)) * 255),
        g: Math.floor((y / (height - 1)) * 255),
        b: 0
      });
    }

    pixels.push(row);
  }
  console.log('Done.');
  saveImage(pixels);
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

function testImage () {
  const width = 256;
  const height = 256;
  const pixels = [];

  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {

      row.push({
        r: Math.floor((x / (width - 1)) * 255),
        g: Math.floor((y / (height - 1)) * 255),
        b: 0
      });
    }

    pixels.push(row);
  }

  saveImage(pixels);
}

main();

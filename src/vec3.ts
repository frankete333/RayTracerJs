class Vec3 {
  values: number[];

  constructor(v1: number, v2: number, v3: number) { this.values = [v1, v2, v3]; }

  private get v1() { return this.values[0]; }
  private get v2() { return this.values[1]; }
  private get v3() { return this.values[2]; }

  add(v: Vec3) {
    return new this(this.v1 + v.v1, this.v2 + v.v2, this.v3 + v.v3);
  }

  subtract(v: Vec3) {
    return this.constructor(this.v1 - v.v1, this.v2 - v.v2, this.v3 - v.v3);
  }

  multiply(s: number) {
    return this.constructor(this.v1 * s, this.v2 * s, this.v3 * s);
  }

  divide(s: number) {
    return this.constructor(this.v1 / s, this.v2 / s, this.v3 / s) as this;
  }

  negate() {
    return this.constructor(-this.v1, -this.v2, -this.v3);
  }

  length() {
    return Math.sqrt(this.v1 * this.v1 + this.v2 * this.v2 + this.v3 * this.v3);
  }

  lengthSquared() {
    return this.v1 * this.v1 + this.v2 * this.v2 + this.v3 * this.v3;
  }

  get (i: number) {
    return this.values[i];
  }

  set (i: number, v: number) {
    this.values[i] = v;
  }


}

export class Point3 extends Vec3 {
  get x() { return this.values[0]; }
  get y() { return this.values[1]; }
  get z() { return this.values[2]; }

  static random() {
    return new Point3(Math.random(), Math.random(), Math.random());
  }
}

export class Color extends Vec3 {
  get r() { return this.values[0]; }
  get g() { return this.values[1]; }
  get b() { return this.values[2]; }
}

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

// let square = new Shape('Square', 4, 5);
// let triangle = new Shape('Triangle', 3, 3);
// square.calcPerimeter();
// triangle.calcPerimeter();


class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
 
  }

  calcArea() {
    console.log(this.sideLength * this.sideLength);
  }
}

let newSq = new Square(5);
newSq.calcPerimeter();
newSq.calcArea();
export const jsVal =
  'class Rectangle {\n  constructor(height, width) {\n    this.height = height;\n    this.width = width;\n  }\n  // Getter\n  get area() {\n    return this.calcArea();\n  }\n  // Method\n  calcArea() {\n    return this.height * this.width;\n  }\n}\n\nconst square = new Rectangle(10, 10);\n\nconsole.log(square.area); // 100'

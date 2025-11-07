const width = 100;
const height = 200;
const color = "red";

// Viết lại object sử dụng ES6
const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

// Kiểm tra:
console.log(rectangle.calculateArea()); // 20000
console.log(rectangle.describe()); // Rectangle 100x200, color: red

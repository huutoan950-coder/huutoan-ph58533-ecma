// ===== BÀI TẬP 1: TÍNH BMI =====

console.log("--- Bài tập 1: BMI ---");

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  let classification = "";

  if (bmi < 18.5) {
    classification = "Thiếu cân";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Bình thường";
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification = "Thừa cân";
  } else {
    // bmi >= 30
    classification = "Béo phì";
  }

  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${classification}`;
}

// Ví dụ sử dụng
console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"
console.log(calculateBMI(50, 1.7)); // "BMI: 17.30 - Phân loại: Thiếu cân"
console.log(calculateBMI(80, 1.7)); // "BMI: 27.68 - Phân loại: Thừa cân"
console.log(calculateBMI(100, 1.75)); // "BMI: 32.65 - Phân loại: Béo phì"

// ===== BÀI TẬP 2: QUẢN LÝ SÁCH =====

console.log("\n--- Bài tập 2: Quản lý sách ---");

function createBook(title, author, year, price) {
  const categoryKey = "category";

  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return `${this.title} của ${this.author} (Năm: ${this.year}) - Giá: ${this.price} VND`;
    },

    calculateDiscount(discountPercent) {
      const discountAmount = (this.price * discountPercent) / 100;
      return this.price - discountAmount;
    },

    [categoryKey + "_Type"]: title.includes("JavaScript")
      ? "Programming"
      : "General",

    ["book_ID"]: `${author.slice(0, 3).toUpperCase()}-${year}`,
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);

console.log(book.getBookInfo());
console.log(`Giá sau khi giảm 10%: ${book.calculateDiscount(10)} VND`);

console.log("Chi tiết đối tượng book:", book);
console.log(`Book ID: ${book.book_ID}`); // JOHN-2023
console.log(`Category: ${book.category_Type}`); // Programming

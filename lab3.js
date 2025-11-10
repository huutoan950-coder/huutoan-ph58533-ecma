// Bài 1
const multiply = (a, b) => a * b;
const isPositive = (number) => number >= 0;
const getRandomNumber = () => Math.random();

// Bài 2 (Viết lại bằng Arrow Function và trả về object rút gọn)
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin,
});

// Bài 3 (Viết lại bằng Arrow Function)
const mergeArrays = (...arrays) => [].concat(...arrays);

const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

const createProduct = (name = "Unnamed Product", price = 10, quantity = 1) => ({
  name,
  price,
  quantity,
  totalPrice: price * quantity,
});

// Bài 4 (Viết lại bằng Arrow Function)
const shoppingCart = (customerName, ...products) => ({
  customerName,
  products,
  totalItems: products.length,
});

// --- Chạy thử các hàm ---

console.log("--- Bài 1 ---");
console.log("multiply(5, 10):", multiply(5, 10));
console.log("isPositive(-3):", isPositive(-3));
console.log("getRandomNumber():", getRandomNumber());

console.log("\n--- Bài 2 ---");
console.log("createUser():", createUser());
console.log("createUser('Bob', 30):", createUser("Bob", 30));

console.log("\n--- Bài 3 ---");
const arrA = [1, 2];
const arrB = ["a", "b"];
console.log("mergeArrays(arrA, arrB):", mergeArrays(arrA, arrB));
console.log("sumAll(10, 20, 30):", sumAll(10, 20, 30));
console.log("createProduct('Keyboard'):", createProduct("Keyboard"));

console.log("\n--- Bài 4 ---");
const order1 = shoppingCart("Alice", "Milk", "Bread");
console.log("shoppingCart('Alice', 'Milk', 'Bread'):", order1);

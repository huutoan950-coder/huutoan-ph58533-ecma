/* --- Bài 1.1: Array - Lấy phần tử đầu và cuối --- */
function getFirstLast(array) {
  const [first] = array;
  const last = array[array.length - 1];
  return [first, last];
}
console.log("Bài 1.1:", getFirstLast([1, 2, 3, 4])); // [1, 4]

/* --- Bài 1.2: Array - Hoán đổi phần tử --- */
function swapElements(arr) {
  if (arr.length >= 4) {
    [arr[1], arr[3]] = [arr[3], arr[1]];
  }
  return arr;
}
console.log("Bài 1.2:", swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

/* --- Bài 2.1: Object - Extract thông tin user --- */
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;
  return { name, email };
}
console.log("Bài 2.1:", getUserInfo(user)); // { name: 'javascript', email: 'javascript@email.com' }

/* --- Bài 2.2: Object - Tham số mặc định --- */
function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}
const product = createProduct({ name: "Laptop", price: 999 });
console.log("Bài 2.2:", product); // { name: 'Laptop', price: 999, category: 'general', inStock: true }

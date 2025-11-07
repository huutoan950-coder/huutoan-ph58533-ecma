// Bài tập 1: Chuyển đổi hàm
const multiply = (a, b) => a * b;

const isPositive = (number) => number >= 0;

const getRandomNumber = () => Math.random();

document.addEventListener("click", () => {
  console.log("Clicked!");
});

// Bài tập 2: Sử dụng Default Parameters
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
  };
}

// Bài tập 3: Rest và Spread

function mergeArrays(...arrays) {
  let mergedArray = [];
  for (let arr of arrays) {
    mergedArray.push(...arr);
  }
  return mergedArray;
}

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function createProduct(productInfo) {
  const defaultProduct = {
    name: "Unnamed Product",
    price: 0,
    quantity: 1,
  };
  return { ...defaultProduct, ...productInfo };
}

// Bài tập 4: Ứng dụng thực tế
function shoppingCart(customerName, ...products) {
  return {
    customerName: customerName,
    products: products,
    itemCount: products.length,
  };
}

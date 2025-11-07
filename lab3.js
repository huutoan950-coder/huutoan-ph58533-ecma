// Bài tập 1: Chuyển đổi hàm (Đã đúng)
const multiply = (a, b) => a * b;

const isPositive = (number) => number >= 0;

const getRandomNumber = () => Math.random();

document.addEventListener("click", () => {
  console.log("Clicked!");
});

// Bài tập 2: Sử dụng Default Parameters (Chuyển sang Arrow Function)
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin,
});

// Bài tập 3: Rest và Spread (Chuyển sang Arrow Function)

const mergeArrays = (...arrays) => {
  let mergedArray = [];
  for (let arr of arrays) {
    mergedArray.push(...arr);
  }
  return mergedArray;
};

const sumAll = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

const createProduct = (productInfo) => {
  const defaultProduct = {
    name: "Unnamed Product",
    price: 0,
    quantity: 1,
  };
  return { ...defaultProduct, ...productInfo };
};

// Bài tập 4: Ứng dụng thực tế (Chuyển sang Arrow Function)
const shoppingCart = (customerName, ...products) => {
  return {
    customerName: customerName,
    products: products,
    itemCount: products.length,
  };
};

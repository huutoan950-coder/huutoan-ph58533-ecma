/* --- Bài 1: Viết lại callback hell --- */

// (Các hàm giả định để code chạy được)
const getOrder = (id) =>
  Promise.resolve({ id: id, userId: 1, productIds: [10, 20] });
const getUser = (id) => Promise.resolve({ id: id, name: "Test User" });
const getProducts = (ids) =>
  Promise.resolve([
    { id: 10, name: "Product A" },
    { id: 20, name: "Product B" },
  ]);

async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    return { order, user, products };
  } catch (error) {
    console.error("Lỗi khi xử lý đơn hàng:", error);
    throw error;
  }
}

processOrder(1)
  .then((result) => console.log("Bài 1 (Async/Await):", result))
  .catch((err) => console.error(err));

/* --- Bài 2: Xử lý lỗi với async/await (API: https://jsonplaceholder.typicode.com/users) --- */
async function safeApiCall(apiFunction, ...args) {
  try {
    const data = await apiFunction(...args);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

// ---- Ví dụ sử dụng cho Bài 2 ----
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  return await response.json();
}

async function fetchFailed() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/99999"
  );
  if (!response.ok) {
    throw new Error(`User not found (404)`);
  }
  return await response.json();
}

(async () => {
  console.log("\nBài 2 (Async/Await): Đang gọi API (thành công)...");
  const { data: users, error: userError } = await safeApiCall(fetchUsers);
  if (userError) {
    console.log("Kết quả (thành công): Lỗi!", userError.message);
  } else {
    console.log("Kết quả (thành công): Lấy được", users.length, "users.");
  }

  console.log("\nBài 2 (Async/Await): Đang gọi API (thất bại)...");
  const { data: badUser, error: badError } = await safeApiCall(fetchFailed);
  if (badError) {
    console.log("Kết quả (thất bại): Bắt được lỗi!", badError.message);
  } else {
    console.log("Kết quả (thất bại):", badUser);
  }
})();

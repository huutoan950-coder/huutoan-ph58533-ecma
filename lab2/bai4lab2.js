const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p class="price">Giá gốc: ${product.price.toLocaleString("vi-VN")} VND</p>
  <p class="discount">Giảm ${product.discount}%</p>
  <p class="final-price">Giá chỉ còn: ${finalPrice.toLocaleString(
    "vi-VN"
  )} VND</p>
  <p class="status">${product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}</p>
</div>
`;

console.log(productCard);

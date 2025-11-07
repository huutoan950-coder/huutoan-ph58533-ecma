const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Kính gửi ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng chúng tôi.
Dưới đây là chi tiết đơn hàng của bạn:

  - Sản phẩm: ${user.product}
  - Tổng tiền: ${user.price.toLocaleString("vi-VN")} VND
  - Ngày đặt: ${user.orderDate}

Chúng tôi sẽ xử lý đơn hàng của bạn sớm nhất.
Trân trọng,
Đội ngũ Hỗ trợ.
`;

console.log(emailTemplate);

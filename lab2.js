// ===================================
// Bài 1: Sửa lỗi scope
// ===================================

console.log("--- BÀI 1 ---");
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

// ===================================
// Bài 2: Sử dụng const đúng cách
// ===================================

setTimeout(function () {
  console.log("\n--- BÀI 2 ---");
  const student = {
    name: "ThuyTien",
    age: 20,
  };

  student.grade = "A";

  student.age = 21;

  console.log(student);
}, 100);

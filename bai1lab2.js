// Sửa 'var' thành 'let'
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Sẽ in ra: 0, 1, 2
  }, 100);
}

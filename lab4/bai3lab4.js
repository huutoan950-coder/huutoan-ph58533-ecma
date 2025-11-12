/* --- Bài 1: Hàm delay --- */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
console.log("Bài 1 (Promise): Bắt đầu delay...");
delay(2000).then(() => console.log("Bài 1 (Promise): 2 seconds passed"));

/* --- Bài 2: Fetch nhiều data --- */
function fetchMultipleData(urls) {
  const fetchPromises = urls.map((url) =>
    fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
  );
  return Promise.all(fetchPromises);
}

// Ví dụ sử dụng cho Bài 2:
const urlsToFetch = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
];

fetchMultipleData(urlsToFetch)
  .then((users) => {
    console.log(
      "Bài 2 (Promise): Đã fetch 2 users:",
      users.map((u) => u.name)
    );
  })
  .catch((error) => console.error(error));

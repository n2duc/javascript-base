function heavyTask(th) {
  console.log(`start heavyTask ${th}`);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`finish heavyTask ${th}`);
      resolve();
    }, 3000);
  });
}

function smallTask(th) {
  console.log(`start smallTask ${th}`);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`finish smallTask ${th}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  // 2 cái chạy tuần tự nhưng không cần đợi smallTask xong mới chạy heavyTask
  smallTask(1);
  heavyTask(1);

  // 2 cái chạy tuần tự nhưng cần đợi smallTask xong mới chạy heavyTask
  await smallTask(2);
  await heavyTask(2);

  // 2 cái chạy song song và cái await ở ngoài chỉ xong khi cả 2 cái đều xong
  // dùng để chạy nhiều hàm async cùng lúc khi nó không liên quan đến nhau (fetch data từ nhiều api khác nhau, không phụ thuộc vào nhau)
  await Promise.all([smallTask(3), heavyTask(3)]);
}

main();

// start smallTask 1
// start heavyTask 1 // heavyTask 1 chạy không cần đợi smallTask 1 xong
// start smallTask 2 // task 2 bắt đầu, không cần đợi task 1 xong
// finish smallTask 1
// finish smallTask 2
// start heavyTask 2 // heavyTask 2 chạy sau khi smallTask 2 xong
// finish heavyTask 1
// finish heavyTask 2
// start smallTask 3 // smallTask 3 chạy sau khi task 2 xong
// start heavyTask 3 // heavyTask 3 bắt đầu không cần đợi smallTask 3 xong
// finish smallTask 3
// finish heavyTask 3

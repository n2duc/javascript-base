// 1. callback hell -> Bad Practices
{
  // setTimeout(() => {
  //   console.log("Running after 5 seconds");
  //   setTimeout(() => {
  //     console.log("Running after 4 seconds");
  //     setTimeout(() => {
  //       console.log("Running after 3 seconds");
  //       setTimeout(() => {
  //         console.log("Running after 2 seconds");
  //       }, 2000);
  //     }, 3000);
  //   }, 4000);
  // }, 5000);
}
// 2. Promise
{
  // pending - resolve - reject
  // new Promise((resolve, reject) => {
  //   resolve("OK");
  //   reject("not OK");
  // });
  let canIHaveNewIphone = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Not agree");
    }, 5000);
  });
  canIHaveNewIphone
    .then((value) => {
      if (value) {
        console.log(`yeah I have new Iphone`);
      } else {
        console.log(`Oh no I dont have new Iphone`);
      }
    })
    .catch((reason) => {
      console.log(reason);
    });

  function makeTimer(duration, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, duration);
    });
  }

  const time1 = makeTimer(3000, "evondev");
  // console.log("time1:", time1);
  const time2 = makeTimer(4000, "Anh Tuan");
  // console.log("time2:", time2);
  const time3 = makeTimer(5000, "Trung Duong");
  // console.log("time3:", time3);
  const time4 = makeTimer(6000, "Tri Hieu");

  // const time5 = Promise.reject("Failed");
  // console.log("time4:", time4);
  // Promise.all([time1, time2, time3, time4])
  //   .then((value) => {
  //     return value;
  //   })
  //   .then((value) => {
  //     console.log(`value of all`);
  //     const newValue = value.slice(2);
  //     return newValue;
  //   })
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((reason) => console.log(`Promise.all reason: ${reason}`));

  // Promise.allSettled([time1, time2, time3, time4, time5])
  //   .then((value) => {
  //     console.log(`value of allSettled`);
  //     console.log(value);
  //   })
  //   .catch((reason) => console.log(`Promise.allSettled reason: ${reason}`));

  // Promise.race([time1, time2, time3, time4])
  //   .then((value) => {
  //     console.log(`value of race`);
  //     console.log(value);
  //   })
  //   .catch((reason) => console.log(`Promise.race reason: ${reason}`));
}
// 3. async await
{
  function delay(timer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, timer);
    });
  }
  async function logInformation() {
    await delay(1000);
    console.log("Running after 1 secs");
    await delay(2000);
    console.log("Running after 2 secs");
  }
  logInformation();
  // async function logInformation() {}
  // const normalFunction = async () => {}
  // const obj = {
  //   fullName: async () => {},
  //   async calculate() {},
  // }
}

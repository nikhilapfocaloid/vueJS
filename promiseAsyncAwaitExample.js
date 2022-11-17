// promise example 1
const count = 1;

let countValue = new Promise(function (resolve, reject) {
    if (count==1) {
        resolve("The count is 1.");
    } else {
        reject("wrong count");
    }
});

countValue
  .then(
    function onSuccess(result) {
        console.log(result);
    })
  .catch(
    function onError(result) {
        console.log(result);
    }
  );

// promise example 2
  function doubleTheVal(x) {
    return new Promise(resolve => {
        resolve(x * 2);
    });
  }
  
  function addPromise(x){
    return new Promise(resolve => {
      doubleTheVal(10).then((a) => {
        doubleTheVal(20).then((b) => {
            doubleTheVal(30).then((c) => {
            resolve(x + a + b + c);
            })
        })
      })
    });
  }
  
  addPromise(10).then((sum) => {
    console.log(sum);
  });


// Async/Await Example
async function addAsync(x) {
    const a = await doubleTheVal(10);
    const b = await doubleTheVal(20);
    const c = await doubleTheVal(30);
    return x + a + b + c;
}

addAsync(10).then((sum) => {
    console.log(sum);
});
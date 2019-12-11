require('es6-promise');
const http = require('q-io/http');
const rp = require('request-promise');

//Ej 1/13 - Warm up

// const setTimeoutPromise = () => {
//     const promise = new Promise((fulfill, reject) => {
//         setTimeout(() => {
//           fulfill('TIMED OUT!');
//         }, 300)
//     });

//     return promise;
// };

// setTimeoutPromise().then((result) => {
//     console.log(result)
// })


// ----------------------------------------------------------------------
//Ej 2/13 - Fulfill a promise

// const setTimeoutPromise = () => {
//     const promise = new Promise((fulfill, reject) => {
//         setTimeout(() => {
//           fulfill('FULFILLED!');
//         }, 300)
//     });

//     return promise;
// };

// setTimeoutPromise().then((result) => {
//     console.log(result)
// })

// ----------------------------------------------------------------------
//Ej 3/13 - Rejecting a Promise

// const setTimeoutPromise = function () {
//     const promise = new Promise((fulfill, reject) => {
//         setTimeout(() => {
//             reject('REJECTED!');
//         }, 300);
//     });

//     return promise;
// };

// const onReject = (error) => {
//     console.log(error);
// }

// setTimeoutPromise()
//     .catch((error) => {
//         onReject(error);
//     });

// ----------------------------------------------------------------------
//Ej 4/13 - To reject or not to reject

// const promise = new Promise((fulfill, reject) => {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });

// const onRejected = (error) => {
//     console.log(error);
// }

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     onRejected(error.message);
// });

// ----------------------------------------------------------------------
//Ej 5/13 - Always asynchronous

// const promise = new Promise((fulfill, reject) => {
//     fulfill('PROMISE VALUE')
// });

// promise.then((res) => {
//     console.log(res);
// });

// console.log('MAIN PROGRAM');

// ----------------------------------------------------------------------
//Ej 6/13 - Shortcuts

//NO TENIA TASK

// ----------------------------------------------------------------------
//Ej 7/13 - Promise after promise

// first().then((firstResult) => {
//     return second(firstResult).then((secondResult) => {
//         console.log(secondResult)
//     });
// })


// ----------------------------------------------------------------------
//Ej 8/13 - Values and promises

// const attachTitle = (param) => {
//     const title = `DR. ${param}`;
//     return title;
// }

// const promise = new Promise((fulfill, reject) => {
//     return fulfill('MANHATTAN');
// })

// promise
//     .then((result) => {
//         console.log(attachTitle(result));
//     })

// ----------------------------------------------------------------------
//Ej 9/13 - Throw an error
//el catch te da la posibilidad de decidir que hacer con el error: que rompa,
//que loggee un error o que continue la ejecucion del programa

// const parsePromised = (param) => {
//     const promise = new Promise((fulfill, reject) => {
//         try {
//             return fulfill(JSON.parse(param));
//         } catch (err) {
//             return reject(err)
//         }
//     });
//     return promise;
// };

// parsePromised(process.argv[2]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error.message);
// })

// ----------------------------------------------------------------------
//Ej 10/13 - An important rule

// const alwaysThrows = () => {
//     throw Error('OH NOES');
// };

// const iterate = (integer) => {
//     console.log(integer)
//     return integer + 1;
// };

// const promiseIterate = (int) => {
//     return Promise.resolve(iterate(int));
// }
// promiseIterate(1)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(alwaysThrows)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .then(promiseIterate)
//     .catch((error) => {
//         console.log(error.message)
//     })

// ----------------------------------------------------------------------
//Ej 11/13 - Multiple promises

// const all = (promise1, promise2) => {
//     const promise = new Promise((resolve, reject) => {
//         let counter = 0;
//         const results = [];

//         promise1().then((res1) => {
//             counter++;
//             results.push(res1);
//             if (counter === 2) {
//                 resolve(results)
//             }
//         })

//         promise2().then((res2) => {
//             counter++;
//             results.push(res2);
//             if (counter === 2) {
//                 resolve(results)
//             }
//         })

//     });

//     return promise;

// }

// all(getPromise1, getPromise2).then((result) => {
//     console.log(result)
// });

//usando promise all
// Promise.all([getPromise1, getPromise2]).then((result) => {
//     console.log(result);
// })

// ----------------------------------------------------------------------
//Ej 12/13 - Fetch JSON

// http.read('http://dummy.restapiexample.com/api/v1/employeessss').then((result) => {
//     console.log(JSON.parse(result.toString()))
// }).catch((err) => {
//     console.log(err)
// });

// ----------------------------------------------------------------------
//Ej 13/13 - Do some work

// const urlCache = 'http://localhost:7000';
// const urlDatabase = 'http://localhost:7001';

// rp.get({url: 'http://localhost:7000'}).then((resultID) => {
//     rp.get({url:`http://localhost:7001/${resultID}`}).then((result) => {
//         console.log(JSON.parse(result));
//     })
// }).catch((err) => {
//     console.log(err);
// })


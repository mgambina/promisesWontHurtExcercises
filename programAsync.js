require('es6-promise');
const http = require('q-io/http');
const rp = require('request-promise');

//VERSIONES ASYNC & AWAIT

//Ejercicio 1/13 - Warm up

// const setTimeoutAsync = () => {
//     const promise = new Promise((fulfill, reject) => {
//         setTimeout(() => {
//           fulfill('TIMED OUT!');
//         }, 300)
//     });

//     return promise
// };

// const runProcess = async () => {
//     const timeOutResult = await setTimeoutAsync();
//     console.log(timeOutResult);

// }

// runProcess();

// ----------------------------------------------------------------------
//Ejercicio 2/13 - Fulfill a promise


// const setTimeoutAsync = () => {
//     const promise = new Promise((fulfill, reject) => {
//         setTimeout(() => {
//           fulfill('FULFILLED!');
//         }, 300)
//     });

//     return promise;
// };

// const runProcess = async () => {
//     const timeOutResult = await setTimeoutAsync();
//     console.log(timeOutResult);

// }

// runProcess();

// ----------------------------------------------------------------------
//Ejercicio 3/13 - Rejecting a Promise

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

// const runProcess = async () => {
//     try {
//         const result = await setTimeoutPromise();
//         return result;
//     } catch (error) {
//         onReject(error);
//     }
// }

// runProcess();

// ----------------------------------------------------------------------
//Ej 4/13 - To reject or not to reject

// const promise = new Promise((fulfill, reject) => {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });

// const onRejected = (error) => {
//     console.log(error);
// }

// const runProcess = async () => {

//     try{
//         const result = await promise;
//         console.log(result)
//         return result;
//     }catch (error) {
//         onRejected(error.message) 
//     }
// }

// runProcess();

// ----------------------------------------------------------------------
//Ej 5/13 - Always asynchronous

// const promise = new Promise((fulfill, reject) => {
//     fulfill('PROMISE VALUE')
// });

// const runProcess = async () => {
//     const result = await promise;
//     console.log(result);
// }

// runProcess();

// console.log('MAIN PROGRAM');

// ----------------------------------------------------------------------
//Ej 6/13 - Shortcuts

//NO TENIA TASK

// ----------------------------------------------------------------------
//Ej 7/13 - Promise after promise

// const runProcess = async () => {
//     const firstFunctionResult = await first();
//     const secondFunctionResult = await second(firstFunctionResult);

//     console.log(secondFunctionResult);
// }

// runProcess();

// ----------------------------------------------------------------------
//Ej 8/13 - Values and promises

// const attachTitle = (param) => {
//     const title = `DR. ${param}`;
//     return title;
// }

// const promise = new Promise((fulfill, reject) => {
//     return fulfill('MANHATTAN');
// })

// const runProcess = async () => {
//     const promiseResult = await promise;
//     const title = attachTitle(promiseResult);

//     console.log(title);

// }

// runProcess();

// ----------------------------------------------------------------------
//Ej 9/13 - Throw an error

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

// const runProcess = async () => {
//     try {
//         const parsePromisedResult = await parsePromised('{"key": "value"}');

//         console.log(parsePromisedResult);

//     } catch (error) {
//         console.log(error);
//     }
// }

// runProcess();

// ----------------------------------------------------------------------
//Ej 10/13 -  An important rule

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

// const iteration = async () => {
//     let result;

//     try {
//          result = await promiseIterate(1);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          alwaysThrows();
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//          result = await promiseIterate(result);
//     }catch(error) {
//         console.log(error.message)
//     }
// }

// iteration();

// ----------------------------------------------------------------------
//Ej 11/13 -  Multiple promises

// const all = (promise1, promise2) => {
//     const promise = new Promise((resolve, reject) => {
//         let counter = 0;
//         const results = [];

//         const promise1func = async () => {
//             const promise1result = await promise1;

//             counter++;
//             results.push(promise1result);
//             if (counter === 2) {
//                 resolve(results)
//             }
//         };

//         const promise2func = async () => {
//             const promise2result = await promise2;

//             counter++;
//             results.push(promise2result);
//             if (counter === 2) {
//                 resolve(results)
//             }
//         };

//         promise1func();
//         promise2func();

//     });

//     return promise;

// }

// const promiseNew = new Promise ((resolve, reject) => {
//     resolve('Hola');
// })

// const allPromise = async () => {
//     const allPromiseResult = await all(promiseNew, promiseNew);

//     console.log(allPromiseResult);
// };

// allPromise();

// ----------------------------------------------------------------------
//Ej 12/13 -  Fetch JSON

// const request = async () => {

//     try {
//         const response = await http.read('http://dummy.restapiexample.com/api/v1/employees');
//         console.log(JSON.parse(response.toString()))

//     } catch (error) {
//         console.log(error.message)
//     }

// }

// request();

// ----------------------------------------------------------------------
//Ej 13/13 - Do some work

// const cacheRequest = async () => {
//     try {
//         const responseCache = await rp.get({ url: 'http://localhost:7000' });
//         const responseDatabase = await rp.get({ url: `http://localhost:7001/${responseCache}` });
//         console.log(JSON.parse(responseDatabase))
//     } catch (error) {
//         console.log(error)
//     }

// }

// cacheRequest();
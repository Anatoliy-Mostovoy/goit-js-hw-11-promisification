// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const random = Math.random()>0.5;
//     if(random){
//         resolve('YES')
//     } 
//         reject('NO');
//     }, 500);
    
// })

// promise.then(
//     result =>{
//         console.log(result)
//         return 5;
//     },
//     // error =>{
//     //     console.log(error);
//     // },
// ).then(x=>{
//     console.log(x)
//     return 10;
// }).then(y=>{
//     console.log(y)
// }).catch(error=>{
//     console.log(error)
// }
// )

console.log('task_1')

const delay = ms => {
    return new Promise ((resolve)=>{
        resolve(ms);
     })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms


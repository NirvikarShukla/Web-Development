// const load=(src,callback) =>{
//   let sc=document.createElement("script")
//   sc.src=src
// sc.onload=()=> callback(sc)
//   document.head.append(sc)
//   }

//   const callback=(arr) => {
//     console.log(arr);
//     }
  
// load("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)





let prom = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("hello");
  //   console.log("done");
  // }, 2000);

  setTimeout(() => {
    reject("bye");
    console.log("not done");
  }, 1000);
});
prom.then((a) => {
  console.log(a);
});

prom.catch((a)=>{
  console.log(a);
})

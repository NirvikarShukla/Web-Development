// let a=10;
// console.log(a);
// if (a>5)
// {
//     console.log("Yes")
// }
// else{
//     console.log("NO")
// }






// let b=prompt("Enter First Number")
// let c=prompt("Enter Operation")
// let d=prompt("Enter Second Number")
// let a=Math.random()
// let obj={
//     "+":"-",
//     "-":"+",
//     "*":"/",
//     "/":"*",
// }
// if (a>0.1){
//     alert(`The result is ${eval(`${b} ${c} ${d}`)}`)
// }
// else{
//     c=obj[c]
//     alert(`The result is ${eval(`${b} ${c} ${d}`)}`)   
// }






// let a=prompt("Enter Your Name")
// let b="@"
// let c=a.length
// let d=b+a+c
// console.log("Your username is "+d)




// let a = document.querySelector("h2");
// console.dir(a)
// a.innerText=a.innerText+" From NIRVIKAR"
// console.log(a)



let boxes=document.getElementsByClassName("box")
function getcolor()
{
    let a=Math.ceil(0+ Math.random()*255)
    let b=Math.ceil(0+ Math.random()*255)
    let c=Math.ceil(0+ Math.random()*255)
    return`rgb(${a},${b},${c})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getcolor()
    e.style.color=getcolor()
})
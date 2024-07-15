
async function a() {
    setInterval(() => {
        
    }, interval);
  let h1 = document.createElement("p");
  h1.innerHTML = "Initializing...";
  document.querySelector(".text").append(h1);
}
async function b() {
  let h2 = document.createElement("p");
  h2.innerHTML = "Reading your files...";
  document.querySelector(".text").append(h2);
}
async function c() {
  let h3 = document.createElement("p");
  h3.innerHTML = "Password files detected...";
  document.querySelector(".text").append(h3);
}
async function d() {
  let h4 = document.createElement("p");
  h4.innerHTML = "Sending files...";
  document.querySelector(".text").append(h4);
}
async function e() {
  let h5 = document.createElement("p");
  h5.innerHTML = "Cleaning up...";
  document.querySelector(".text").append(h5);
}

alert("Are you sure?")

let text = [
  ">>>  Initialized Hacking now reading your data",
  ">>>  Reading your Files",
  ">>>  Password files Detected",
  ">>>  Sending all passwords and personal files to server",
  ">>>  Cleaning up",
  ">>>  Successful"
];
const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = Math.ceil(Math.random() * 6 + 1);
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

const additem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.querySelector(".text").append(div);
};

async function main() {
  let a = setInterval(() => {
    let last = document.querySelector(".text").lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 800);
  for (const item of text) {
    await additem(item);
  }
  await randomDelay()
  clearInterval(a)
};

main();

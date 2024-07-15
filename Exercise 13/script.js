document.querySelector(".btn").addEventListener("click", () => {
  let a = prompt(`Enter the duration of the video in minutes`);
  let b = prompt(`Enter the title the video`);
  let c = Number(prompt(`Enter the views the video`));
  let d = Number(prompt(`How old the video is in months`));
  let c1;
  let d1;
  let a1;
  let hours;
  let minutes;
  let a2 = 0;

  if (a > 60) {
    hours = a / 60;
    minutes = a % 60;
    a1 = `${hours}:${minutes}:${a2}${a2}`;
  } else if (a == 60) {
    a1 = `01:00:00`;
  } else {
    a1 = `${a2}${a2}:${a}:${a2}${a2}`;
  }

  if (c > 1000 && c < 1000000) {
    c1 = `${Math.floor(c / 1000)}K`;
  } else if (c >= 1000000) {
    c1 = `${Math.floor(c / 1000000)}M`;
  } else {
    c1 = `${c}`;
  }

  if (d > 12) {
    d1 = `${Math.floor(d / 12)}years`;
  } else {
    d1 = `${d}months`;
  }
  createcard(a1, b, c1, d1);

  function createcard(duration, title, views, old) {
    let html = `<div class="card">
        <div class="img">
          <span class="duration">${duration}</span>
        </div>
        <div class="content">
          <div class="title">
            ${title}
          </div>
          <div class="attributes">
            <span class="cname">CodeWithHarry&nbsp;&middot;</span>
            <span class="views">${views} views&nbsp;&middot;</span>
            <span class="old">${old} ago&nbsp;</span>
          </div>
        </div>
      </div>`;
    //   document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+html
    let div = document.createElement("div");
    div.innerHTML = html;
    document.querySelector(".container").append(div);
  }
});

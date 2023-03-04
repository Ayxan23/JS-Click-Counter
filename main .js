let timer = document.querySelector(".timer");
let index = 5;
let key_timer = true;

//
let count_box = document.querySelector(".count_box");
let counter = 0;

//click
let click_box = document.querySelector(".click_box");

//score
let score = document.querySelector(".score");
let score_p = document.querySelector(".score_p");
let score_btn = document.querySelector(".score_btn");
let stars = document.querySelector(".stars");

click_box.addEventListener("click", () => {
  secKey = false;
  timerFunc();
  counterFunc();
});

function timerFunc() {
  let saveSec = index;
  if (key_timer) {
    let timerInt = setInterval(() => {
      timer.innerHTML = `${--index}`;
      if (index == 0) {
        clearInterval(timerInt);
        secKey = true;
        score.style.display = "flex";
        score_p.innerHTML = `<span class="chery">${counter}</span> Clicks in <span class="green">${saveSec}</span> Seconds`;
        if (counter >= 50) {
          stars.innerHTML = `<i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>`;
        } else if (counter >= 40) {
          stars.innerHTML = `<i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>`;
        } else if (counter >= 30) {
          stars.innerHTML = `<i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>`;
        } else if (counter >= 20) {
          stars.innerHTML = `<i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>`;
        } else if (counter >= 0) {
          stars.innerHTML = `<i class="fa-solid fa-star"></i>`;
        }
      }
    }, 1000);
  }
  key_timer = false;
}

function counterFunc() {
  counter++;
  count_box.innerHTML = `${counter}`;
}

score_btn.addEventListener("click", () => {
  score.style.display = "none";
  counter = 0;
  count_box.innerHTML = `${counter}`;
  index = secNum;
  timer.innerHTML = `${index}`;
  key_timer = true;
});

let sec = document.querySelectorAll(".sec");
let secNum = 5;
let secKey = true;

sec.forEach((second) => {
  second.addEventListener("click", () => {
    if (secKey) {
      secNum = Number(second.innerHTML.split(" ")[0]);
      index = secNum;
      timer.innerHTML = `${index}`;
    }
  });
});

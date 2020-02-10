const leftArrow = document.querySelector(".slider__controls--left");
const rightArrow = document.querySelector(".slider__controls--right");
const sliderImg = document.querySelector(".slider__img");
const textBig = document.querySelector(".slider__text--big");
const textLow = document.querySelector(".slider__text--low");
const sliderDots = document.querySelector(".slider__dots");

let singleDot;
let counter = 0;
const slides = [
  {
    id: 1,
    imgAddress:
      "https://cdn.pixabay.com/photo/2017/10/04/18/11/road-2817102_960_720.jpg",
    imgTextBig: "SLIDE 1 DUŻY TEKST",
    imgTextSmall: "SLIDE 1 MAŁY TEKST"
  },
  {
    id: 2,
    imgAddress:
      "https://cdn.pixabay.com/photo/2019/10/01/21/39/caravansary-4519431_960_720.jpg",
    imgTextBig: "SLIDE 2 DUŻY TEKST",
    imgTextSmall: "SLIDE 2 MAŁY TEKST"
  },
  {
    id: 3,
    imgAddress:
      "https://cdn.pixabay.com/photo/2019/04/08/10/26/baltic-sea-4111719_960_720.jpg",
    imgTextBig: "SLIDE 3 DUŻY TEKST",
    imgTextSmall: "SLIDE 3 MAŁY TEKST"
  },
  {
    id: 4,
    imgAddress:
      "https://cdn.pixabay.com/photo/2017/08/06/18/05/pumpkin-2594747_960_720.jpg",
    imgTextBig: "Slide 4 DUŻY TEKST",
    imgTextSmall: "SLIDE 4 MAŁY TEKST"
  },
  {
    id: 5,
    imgAddress:
      "https://cdn.pixabay.com/photo/2019/10/29/13/55/landscape-4587018_960_720.jpg",
    imgTextBig: "SLIDE 5 DUŻY TEKST",
    imgTextSmall: "SLIDE 5 MAŁY TEKST!"
  }
];
document.addEventListener("DOMContentLoaded", function() {
  //dodawanie kropek do nawigacji
  for (let i = 0; i < slides.length; i++) {
    showDots();
  }
  singleDot = document.querySelectorAll(".slider__dot");
  changeDot(singleDot);
  document.querySelector(".slider__dot").classList.add("active");
});
document.addEventListener("keyup", e => {
  if (e.keyCode === 39 && counter < slides.length - 1) {
    counter++;
    changePicture(counter);
    changeDot(singleDot);
  } else if (e.keyCode === 37 && counter > 0) {
    counter--;
    changePicture(counter);
    changeDot(singleDot);
  }
  // console.log(e.keyCode);
});
// function dotByKey() {
//   singleDot.map(el => el.classList.remove("active"));
//   singleDot[counter].classList.add("active");
// }

function showDots() {
  const dot = document.createElement("div");
  dot.setAttribute("class", "slider__dot");
  sliderDots.appendChild(dot);
}

function changePicture(counter) {
  sliderImg.style.opacity = 0;
  setTimeout(function() {
    sliderImg.style.backgroundImage = `url(${slides[counter].imgAddress})`;
    textBig.innerHTML = `${slides[counter].imgTextBig}`;
    textLow.innerHTML = `${slides[counter].imgTextSmall}`;
    sliderImg.style.opacity = 1;
  }, 500);
}

function handleClick() {
  if (
    this.classList.contains("slider__controls--right") &&
    counter < slides.length - 1
  ) {
    counter++;
    console.log(counter);
    changePicture(counter);
  } else if (this.classList.contains("slider__controls--left") && counter > 0) {
    counter--;
    console.log(counter);
    changePicture(counter);
  } else if (counter === slides.length - 1) {
    counter = 0;
    changePicture(counter);
  } else if (counter === 0) {
    counter = slides.length - 1;
    changePicture(counter);
  }
  //   singleDot = document.querySelectorAll(".slider__dot");
  changeDot(singleDot);
}
function changeDot(dot) {
  let dotsArray = Array.from(dot);
  dotsArray.map((el, index) => {
    index === counter
      ? el.classList.add("active")
      : el.classList.remove("active");
    el.addEventListener("click", function() {
      changePicture(index);
      counter = index;
      dotsArray.map(el => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

rightArrow.addEventListener("click", handleClick);
leftArrow.addEventListener("click", handleClick);

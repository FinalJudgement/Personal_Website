const enterBtn = document.querySelector(".btn-begin");
const header = document.querySelector("header");
const bannerImg = document.querySelector("#logo-art");
const greeting = document.querySelector(".greeting-container");
const quoteblock = document.querySelector("#quoteblock");
const main = document.querySelector("main");
const overflowController = document.querySelector("html, body, main");
const botNav = document.querySelector(".bot-nav");
const navBurger = document.querySelector(".burger-nav");
const navLinks = document.querySelector(".nav-links");

header.style.minHeight = 450;

const vanishHeaderContent = () => {
  bannerImg.style.opacity = 0;
  bannerImg.style.visibility = "hidden";
  greeting.style.opacity = 0;
  greeting.style.visibility = "hidden";
};

const dropCurtain = (_callback) => {
  header.style.height = `${92}%`;
  setTimeout(() => {
    _callback();
    vanishHeaderContent();
  }, 1400);
  setTimeout(() => {
    botNav.style.display = "none";
  }, 2500);
};

const contentAppear = () => {
  main.style.opacity = 1;
  overflowController.style.overflowY = "scroll";
};

const liftCurtain = () => {
  dropCurtain(function () {
    header.style.height = `${10}%`;
    header.style.minHeight = null;
    contentAppear();
  });
};

const enterButton = () => {
  enterBtn.style.display = "none";
  liftCurtain();
};

const navToggle = () => {
  header.classList.toggle("header-effect");
  navLinks.classList.toggle("nav-effect");
};

navBurger.addEventListener("click", function () {
  navToggle();
});

setTimeout(() => {
  liftCurtain();
}, 4500);

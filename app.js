const enterBtn = document.querySelector(".btn-begin");
const header = document.querySelector("header");
const bannerImg = document.querySelector("#logo-art");
const greeting = document.querySelector(".greeting-container");
const quoteblock = document.querySelector("#quoteblock");
const main = document.querySelector("main");
const overflowController = document.querySelector("html, body, main");

const dropCurtain = (_callback) => {
  header.style.height = `${92}%`;
  setTimeout(() => {
    _callback();
    vanishHeaderContent();
  }, 1400);
};

const liftCurtain = () => {
  dropCurtain(function () {
    header.style.height = `${10}%`;
    contentAppear();
  });
};

const vanishHeaderContent = () => {
  bannerImg.style.opacity = 0;
  bannerImg.style.visibility = "hidden";
  greeting.style.opacity = 0;
  greeting.style.visibility = "hidden";
};

const contentAppear = () => {
  main.style.opacity = 1;
  overflowController.style.overflowY = "scroll";
  header.style.minHeight = 0;
};

enterBtn.addEventListener("click", function () {
  enterBtn.style.display = "none";
  liftCurtain();
});

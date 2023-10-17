const enterBtn = document.querySelector(".btn-begin");
const header = document.querySelector("header");
const bannerImg = document.querySelector("#logo-art");
const greeting = document.querySelector(".greeting-container");

const dropCurtain = (_callback) => {
  header.style.height = `${92}%`;
  setTimeout(() => {
    _callback();
    vanishHeaderContent();
  }, 2100);
};

const liftCurtain = () => {
  dropCurtain(function () {
    header.style.height = `${10}%`;
  });
};

const vanishHeaderContent = () => {
  bannerImg.style.opacity = 0;
  bannerImg.style.visibility = "hidden";
  greeting.style.opacity = 0;
  greeting.style.visibility = "hidden";
};

enterBtn.addEventListener("click", function () {
  enterBtn.style.display = "none";
  liftCurtain();
});

const advice = document.querySelector(".advice");
const number = document.querySelector(".number");

window.onload = function () {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { method: "GET", cache: "reload" })
    .then((res) => res.json())
    .then((res) => {
      advice.textContent = `"${res.slip.advice}"`;
      number.textContent = res.slip.id;
    })
    .catch((err) => console.log(err));
}

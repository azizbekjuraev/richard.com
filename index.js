`use strict`;

const subBtn = document.getElementById("sub-btn");
const getBtn = document.getElementById("get-btn");
const downBtn = document.getElementById("down-btn");
const getInTouchBtn = document.getElementById("get-2-btn");
const downloadNav = document.getElementById("download");
let inputEl = document.getElementById("input-el");

let contact = {
  name: "Azizbek",
  surname: "Juraev",
  number: "+998941500330",
  email: "ajuraev98@mail.ru",
};

function appIsNotReady() {
  alert(`App is not available now, sorry :(`);
}

getBtn.addEventListener("click", () => {
  appIsNotReady();
});

downBtn.addEventListener("click", () => {
  appIsNotReady();
});

downloadNav.addEventListener("click", () => {
  appIsNotReady();
});

getInTouchBtn.addEventListener("click", () => {
  alert(`Call to ${contact.number} or send message to ${contact.email}!`);
});

subBtn.addEventListener("click", () => {
  alert(`Email has been sent to ${inputEl.value}, thanks for choosing us!`);
});

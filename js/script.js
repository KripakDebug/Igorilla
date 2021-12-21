const btn = document.querySelector(".btn");
const selectionPage = document.querySelector(".selection-page");
const btnCreateHabit = document.querySelector(".selection-page__btn");
const wrapperCard = document.querySelector(".card-wrapper");
let inputDateHabit = document.querySelector("#date-habit");
let inputNameHabit = document.querySelector("#name-habit");
btn.addEventListener("click", () => {
  selectionPage.style.opacity = 1;
  selectionPage.style.display = "flex";
  selectionPage.style.zIndex = 1;
});

btnCreateHabit.addEventListener("click", () => {
  const randomKeyLocalStorage = Math.random();
  if (inputNameHabit.value && inputDateHabit.value) {
    const dateObject = {
      title: inputNameHabit.value,
      date: new Date(inputDateHabit.value).getTime(),
    };
    function date() {
      const newDate = new Date();
      localStorage.setItem(randomKeyLocalStorage, JSON.stringify(dateObject));
      const dateLocalStorage = JSON.parse(localStorage.getItem(randomKeyLocalStorage));
      const timer = newDate - dateLocalStorage.date;
      const day = Math.floor(timer / 1000 / 60 / 60 / 24);
      const hours = Math.floor(timer / 1000 / 60 / 60) % 24;
      const minets = Math.floor(timer / 1000 / 60) % 60;
      const second = Math.floor(timer / 1000) % 60;
      dayElement.classList.add("day");
      dayElement.textContent = `${day} дня/ей`;
      hoursElement.classList.add("hourse");
      hoursElement.textContent = `${hours} час/а`;
      minetsElement.classList.add("minets"); 
      minetsElement.textContent = `${minets} минут`;
      secondElement.classList.add("second");
      secondElement.textContent = `${second} секунд`;
    }
    const dayElement = document.createElement("div");
    const hoursElement = document.createElement("div");
    const minetsElement = document.createElement("div");
    const secondElement = document.createElement("div");
    const card = document.createElement("div");
    const dateWrapper = document.createElement("div");
    dateWrapper.classList.add("date");
    dateWrapper.appendChild(dayElement);
    dateWrapper.appendChild(hoursElement);
    dateWrapper.appendChild(minetsElement);
    dateWrapper.appendChild(secondElement);
    card.classList.add("card");
    card.textContent = inputNameHabit.value;
    card.appendChild(dateWrapper);
    selectionPage.style.opacity = 0;
    selectionPage.style.display = "none";
    wrapperCard.appendChild(card);
    selectionPage.style.zIndex = -1;
    inputNameHabit.value = "";
    date();
    setInterval(date, 1000);
  }
  inputDateHabit.value = '';
  inputNameHabit.value = "";
  selectionPage.style.opacity = 0;
  selectionPage.style.display = "none";
  selectionPage.style.zIndex = -1;
});
 
if(localStorage.length > 0){
 for (const key in localStorage) {
   if (Object.hasOwnProperty.call(localStorage, key)) {
     const element = JSON.parse(localStorage[key]);
     const dayElement = document.createElement("div");
     const hoursElement = document.createElement("div");
     const minetsElement = document.createElement("div");
     const secondElement = document.createElement("div");
     const card = document.createElement("div");
     const dateWrapper = document.createElement("div");
     dateWrapper.classList.add("date");
     function date() {
      const newDate = new Date();
      const timer = newDate - element.date;
      const day = Math.floor(timer / 1000 / 60 / 60 / 24);
      const hours = Math.floor(timer / 1000 / 60 / 60) % 24;
      const minets = Math.floor(timer / 1000 / 60) % 60;
      const second = Math.floor(timer / 1000) % 60;
      dayElement.classList.add("day");
      dayElement.textContent = `${day} дня/ей`;
      hoursElement.classList.add("hourse");
      hoursElement.textContent = `${hours} час/а`;
      minetsElement.classList.add("minets"); 
      minetsElement.textContent = `${minets} минут`;
      secondElement.classList.add("second");
      secondElement.textContent = `${second} секунд`;
    }
     dateWrapper.appendChild(dayElement);
     dateWrapper.appendChild(hoursElement);
     dateWrapper.appendChild(minetsElement);
     dateWrapper.appendChild(secondElement);
     card.classList.add("card");
     card.textContent = element.title;
     card.appendChild(dateWrapper);
     wrapperCard.appendChild(card);
     date();
     setInterval(date, 1000)
   }
 }
}
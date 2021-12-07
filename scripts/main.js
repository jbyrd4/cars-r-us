import {customCar } from "./customCar.js"

const content = document.querySelector("#content")
content.innerHTML = customCar()

const renderHTML = () => content.innerHTML = customCar()

document.addEventListener("stateChanged", (event) => renderHTML())
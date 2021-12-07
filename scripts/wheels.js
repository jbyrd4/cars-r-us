import { getWheels } from "./database.js"
import { setWheels } from "./database.js"

const wheels = getWheels()

export const wheelList = () => {
    let html = `<option value="0">Select a wheel style</option>`
    const wheelHTML = wheels.map((wheel) => {
       return `<option value="${wheel.id}">${wheel.wheel}</option>`
    })
    
    html += wheelHTML.join("")
    return html
}

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
       setWheels(parseInt(changeEvent.target.value))
    }
})
import { getTechs } from "./database.js"
import { setTech } from "./database.js"

const techs = getTechs()

export const techList = () => {
    let html = `<option value="0">Select a technology package</option>`
    const techHTML = techs.map((tech) => {
        return `<option value ="${tech.id}">${tech.pacakge}</option>`
    })

    html += techHTML.join("")
    return html
}

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTech(parseInt(changeEvent.target.value))
    }
})
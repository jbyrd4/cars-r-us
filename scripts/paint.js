import { getPaintColors } from "./database.js"
import { setPaint } from "./database.js"

const paints = getPaintColors()

export const paintList = () => {
    let html = `<option value="0">Select a Paint Color</option>`
    const paintHTML = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    html += paintHTML.join("")
    return html
}

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "paints") {
        setPaint(parseInt(changeEvent.target.value))
    }
})
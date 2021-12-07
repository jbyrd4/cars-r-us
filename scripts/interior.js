import { getInteriors } from "./database.js"
import { setInterior } from "./database.js"

const interiors = getInteriors()

export const interiorList = () => {
    let html = `<option value="0">Select an interior material</option>`
    const interiorHTML = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.seatType}</option>`
    })
    
    html += interiorHTML.join("")
    return html
}

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInterior(parseInt(changeEvent.target.value))
    }
})
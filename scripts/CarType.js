import { getCarTypes, setCarType } from "./database.js";

const types =  getCarTypes()

export const carTypes = () => {
    let typeHtml = `<ul>`

    const type = types.map((type) => {
        return `<li>
        <input type="radio" name="type" value="${type.id}">${type.type}</input>
        </li>`
    })
    
    typeHtml += type.join("")
    typeHtml += `</ul>`
    return typeHtml
}

document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setCarType(parseInt(event.target.value))
    }
})
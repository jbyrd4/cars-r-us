import { wheelList } from "./wheels.js"
import { paintList } from "./paint.js"
import { interiorList } from "./interior.js"
import { techList } from "./tech.js"
import { newCustomOrder } from "./database.js"
import { Orders } from "./orders.js"


export const customCar = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <section>
        <article>    
            <h2><label for="paints">Paint Colors</label></h2>
            <select name="paints" id="paints">
            ${paintList()}
            </select>
        </article>
        <article>
            <h2><label for="interior">Interior</label></h2>
            <select name="interior" id="interior">
            ${interiorList()}
            </select>
        </article>
        <article>
            <h2><label for="wheels">Wheels</label></h2>    
            <select name="wheels" id="wheels">
            ${wheelList()}
            </select>
        </article> 
        <article>
            <h2><label for="tech">Technologies</label></h2>
            <select name="tech" id="tech">
            ${techList()}
            </select>
        </article>
    </section>
    <br>
    <section>
    <button id="orderButton">Create Custom Order</button>
    </section>
    <h2>Custom Car Orders</h2>
    <div>${Orders()}</div>`
}

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        newCustomOrder()
    }
})
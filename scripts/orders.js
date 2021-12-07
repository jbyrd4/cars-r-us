import { getOrders, getInteriors, getPaintColors, getTechs, getWheels } from "./database.js";

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul class='listStyle'>"

    const listItem = orders.map(orderList)

    html += listItem.join("")
    html += "</ul>"

    return html
}

export const orderList = (order) => {
    const interiors = getInteriors()
    const paints = getPaintColors()
    const techs = getTechs()
    const wheels = getWheels() 
    const foundInterior = interiors.find(interior => interior.id === order.interiorId)
    const foundPaint = paints.find(paint => paint.id === order.paintId)
    const foundTech = techs.find(tech => tech.id === order.techId)
    const foundWheel = wheels.find(wheel => wheel.id === order.wheelId)
    const totalPrice = foundInterior.price + foundPaint.price + foundTech.price + foundWheel.price
    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    <div class="orderBackground">
    <p><span class="boldText">Order #${order.id} -</span> A ${foundPaint.color} vehicle with ${foundWheel.wheel} wheels,
     a ${foundInterior.seatType} interior, and a ${foundTech.pacakge}.</p>
     <p>This custom vehicle has a total price of: ${costString}</p>
     <p>---------------------------------------------------------------</p>
     </div>
    </li>`
}

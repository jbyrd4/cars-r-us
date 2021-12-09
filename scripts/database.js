const database = {
    paintColors: [
        {id: 1, color: 'Silver', price: 0},
        {id: 2, color: 'Midnight Blue', price: 1250},
        {id: 3, color: 'Firebrick Red', price: 1250},
        {id: 4, color: 'Spring Green', price: 2000}
    ],
    interiors: [
        {id: 1, seatType: 'Beige Fabric', price: 0},
        {id: 2, seatType: 'Charcoal Fabric', price: 750},
        {id: 3, seatType: 'White Leather', price: 1500},
        {id: 4, seatType: 'Black Leather', price: 1500}
    ],
    wheels: [
        {id: 1, wheel: '17-inch Pair Radial', price: 0},
        {id: 2, wheel: '17-inch Pair Radial Black', price: 450},
        {id: 3, wheel: '18-inch Pair Spoke Silver', price: 750},
        {id: 4, wheel: '18-inch Pair Spoke Black', price: 1000}
    ],
    technologies: [
        {id: 1, pacakge: 'Basic Package', price: 0},
        {id: 2, pacakge: 'Navigation Package', price: 800},
        {id: 3, pacakge: 'Visibility Package', price: 800},
        {id: 4, pacakge: 'Ultra Package', price: 1500}
    ],
    carTypes: [
        {id: 1, type: "Car", multiplier: 1},
        {id: 2, type: "SUV", multiplier: 1.5},
        {id: 3, type: "Truck", multiplier: 2.25}
    ],
    carOrders: [],
    newOrder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getTechs = () => {
    return database.technologies.map((tech) => ({...tech}))
}

export const getOrders = () => {
    return database.carOrders.map((order) => ({...order}))
}

export const getCarTypes = () => {
    return database.carTypes.map((type) => ({...type}))
}

export const setPaint = (id) => {
    database.newOrder.paintId = id
}

export const setInterior = (id) => {
    database.newOrder.interiorId = id
}

export const setWheels = (id) => {
    database.newOrder.wheelId = id
}

export const setTech = (id) => {
    database.newOrder.techId = id
}

export const setCarType = (id) => {
    database.newOrder.typeId = id
}

export const newCustomOrder = () => {
    database.newOrder.id = database.carOrders.length + 1
    database.newOrder.timestamp = Date.now()
    database.carOrders.push(database.newOrder)
    database.newOrder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
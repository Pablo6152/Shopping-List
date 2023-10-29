const actionAdd = document.getElementById("action-add")
const addContainer = document.getElementById("add-container")
const backButton = document.getElementById("back-btn")
const addItem = document.getElementById("add-item")
const itemAddName = document.getElementById("add-item-name")
const itemAddPrice = document.getElementById("add-item-price")
const itemAddDate = document.getElementById("add-item-date")
const app = document.getElementById("app")
const items = [
    {
        name: "Docena de huevos",
        price: 76.58,
        date: "01/01/2023"
    }
]

function loadApp(){
    const appData = `
    <div id="items-list-container" class="items-list-container">
        <div class="item item-color">
            <p class="item-name">${items[0].name}</p>
            <div class="item-data">
                <p class="category">Food</p>
                <p class="price">$ ${items[0].price}</p>
            </div>
        </div>
    </div>

    <div id="items-list-container" class="items-list-container">
        <div class="item item-color">
            <p class="item-name">${items[0].name}</p>
            <div class="item-data">
                <p class="category">Food</p>
                <p class="price">$ ${items[0].price}</p>
            </div>
        </div>
    </div>

    <div id="items-list-container" class="items-list-container">
        <div class="item item-color">
            <p class="item-name">${items[0].name}</p>
            <div class="item-data">
                <p class="category">Food</p>
                <p class="price">$ ${items[0].price}</p>
            </div>
        </div>
    </div>
    `

    app.innerHTML += appData
}

actionAdd.addEventListener("click", showAddWindow)
backButton.addEventListener("click", hideAddWindow)
addItem.addEventListener("click", submitItem)

function showAddWindow(){
        addContainer.classList.remove("hide-window")
        addContainer.classList.add("show-window")
}

function hideAddWindow(){
    addContainer.classList.add("hide-window")
    addContainer.classList.remove("show-window")
}

function submitItem(){
    console.log(itemAddName.value)
    console.log(itemAddPrice.value)
    console.log(itemAddDate.value)
}

console.log(`${items[0].name}, $ ${items[0].price}, ${items[0].date}`)

loadApp()
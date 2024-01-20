import { loadTheme } from "./theme.js";

const actionAdd = document.getElementById("action-add")
const actionMenu = document.getElementById("action-menu")
const closeBtn = document.getElementById("close-btn")
const addContainer = document.getElementById("add-container")
const menuContainer = document.getElementById("menu-container")
const backButton = document.getElementById("back-btn")
const addItem = document.getElementById("add-item")
const itemAddName = document.getElementById("add-item-name")
const itemAddPrice = document.getElementById("add-item-price")
const itemAddDate = document.getElementById("add-item-date")
const itemsList = document.getElementById("items-list")
const totalContainer = document.getElementById("total-container")


let items = []
let itemsBinContainer = []

itemsList.addEventListener("click", e => {
    let idSelected = parseInt(e.target.id)
    
    if(!isNaN(parseInt(e.target.id))){
        let itemsBinBuffer = []
        itemsBinBuffer = items.splice(parseInt(e.target.id), 1)

        itemsBinContainer.push(itemsBinBuffer[0])

        for (let i = idSelected; i < items.length; i++) { 
            items[i].id--
        }

        saveItems()
        renderApp()
    }

})

function renderApp(){
    loadItems()
    const itemsDisplay = items

    let appData = ""
    let total = 0
    
    // Added the delete btn to each div instead of a global one
    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `
            <div class="item">
                <div class="item-head item-color">
                <p class="item-name">${itemsDisplay[i].name}</p>

                <button class="delete-btn">
                    <span id="${itemsDisplay[i].id}" class="material-symbols-outlined item-delete-icon">
                        delete
                    </span>
                </button>

                </div>
                <div class="item-data">
                    <p class="category">Food</p>
                    <p class="price">$ ${itemsDisplay[i].price}</p>
                </div>
            </div>
       `
    }

    itemsList.innerHTML = appData

    for (let i = 0; i < items.length; i++){
        total += items[i].price
    }

    if(total >= 1){
        totalContainer.innerHTML = `
        <p class="total-amount"><span class="total-amt">$ ${total}</span></p>
    `
    } else{
        totalContainer.innerHTML = `
        <p class="total-amount hidden-total-amount-div"></p>
    `
    }

}

// Buttons, to be exported
actionAdd.addEventListener("click", showAddWindow)
backButton.addEventListener("click", hideAddWindow)
addItem.addEventListener("click", submitItem)

// New menu btn
actionMenu.addEventListener("click", showMenuWindow)
closeBtn.addEventListener("click", hideMenuWindow)

function showMenuWindow(){
    menuContainer.classList.remove("hide-window")
    menuContainer.classList.add("show-window")
}

function hideMenuWindow(){
    menuContainer.classList.add("hide-window")
    menuContainer.classList.remove("show-window")
}

function showAddWindow(){
    addContainer.classList.remove("hide-window")
    addContainer.classList.add("show-window")
}

function hideAddWindow(){
    addContainer.classList.add("hide-window")
    addContainer.classList.remove("show-window")
}

function submitItem(){
    items.push(
        {
            name: itemAddName.value,
            price: parseInt(itemAddPrice.value),
            date: "01/01/2023",
            id: items.length
        }
    )

    hideAddWindow()
    saveItems()
    renderApp()

}
    // Save to local storage function
    function saveItems(){
        localStorage.setItem("itemsArray", JSON.stringify(items))
    }
    function loadItems(){
        let loadedData = []

        if (localStorage.getItem("itemsArray") == null || loadedData.length < 0) {
            console.log("Empty")
        } else { 
            loadedData = localStorage.getItem("itemsArray")
            items = JSON.parse(loadedData)
            console.log("Not empty") 
        }
    }


loadTheme()
renderApp()
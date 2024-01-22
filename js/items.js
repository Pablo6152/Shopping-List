import { itemAddName, itemAddPrice, itemAddDate } from "./input.js"
import { hideAddWindow } from "./Buttons.js"
import { totalContainer, itemsList } from "./Containers.js"
import { renderApp } from "./index.js"

let items = []


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
    } else { 
        loadedData = localStorage.getItem("itemsArray")
        items = JSON.parse(loadedData)
    }
}

function calculateTotal(){

    let total = 0

    for (let i = 0; i < items.length; i++){
        total += items[i].price
    }

    if(total >= 1){
        totalContainer.innerHTML = `
        <p class="total-amount"><span class="total-amt">$ ${total}</span></p>
    `
        totalContainer.classList.remove("hidden-total-amount-div")
    } else{
        totalContainer.innerHTML = `
        <p class="total-amount"></p>
    `
        totalContainer.classList.add("hidden-total-amount-div")
    }

}

function renderItems(){
    loadItems()

    const itemsDisplay = items
    let appData = ""
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
       calculateTotal()

}

export { submitItem, saveItems, loadItems, items, renderItems }
import { itemAddName, itemAddPrice, itemAddDate } from "./input.js"
import { hideAddWindow } from "./Buttons.js"
import { totalContainer, itemsList } from "./Containers.js"
import { renderApp } from "./index.js"
import { removeItem } from "./itemsBin.js"
import { toFavoriteItem } from "./favoriteItems.js"

let items = []



itemsList.addEventListener("click", itemSelector)

function itemSelector(e){
    // console.log(`
    // Item id=${e.target.parentNode.id}
    // Operation=${e.target.id}
    // `)

    if (e.target.id == "e"){
        editItems()
    } else if (e.target.id == "f"){
        // toFavoriteItem(e.target.parentNode.id)
        console.log(`Trigger btn: ${e.target.parentNode.id}`)
    } else if (e.target.id == "r"){
        // e.target.parentNode.id is the id of the item, 0 is the origin "Items"
        removeItem(e.target.parentNode.id, 0)
    }

}


function editItems(){
    console.log("Edit")
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

                <div id="${itemsDisplay[i].id}" class="item-user-options">

                    <span id="e" class="material-symbols-outlined item-edit-icon item-icon item-btn">
                            edit
                    </span>
                    
                    <span id="f" class="material-symbols-outlined menu-favorite-icon item-icon item-btn">
                            favorite
                    </span>

                    <span id="r" class="material-symbols-outlined item-delete-icon item-icon item-btn">
                            delete
                    </span>
                </div>

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
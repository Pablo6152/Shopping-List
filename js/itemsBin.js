import { itemsBinList } from "./Containers.js"
import { saveItems, items } from "./items.js"
import { saveFavoriteItems, favoriteItems } from "./favoriteItems.js"
import { renderApp } from "./index.js"
let itemsBin = []

itemsBinList.addEventListener("click", itemBinSelector)

function removeItem(itemId, origin){
    let idSelected = parseInt(itemId)

    // console.log(itemId, origin)
    
        if(!isNaN(parseInt(itemId))  && origin == 0){
            let itemsBinBuffer = []
            itemsBinBuffer = items.splice(parseInt(itemId), 1)
            
            for (let i = 0; i < itemsBinBuffer.length; i++) {
                itemsBinBuffer[i].id = itemsBin.length
            }
    
            itemsBin.push(itemsBinBuffer[0])
    
            for (let i = idSelected; i < items.length; i++) { 
                items[i].id--
            }
    
            saveItems()
            saveItemsBin()
            renderApp()
        }

    if (!isNaN(parseInt(itemId)) && origin == 1){
            let itemsBinBuffer = []
            itemsBinBuffer = favoriteItems.splice(parseInt(itemId), 1)
            
            // console.log(favoriteItems)
            
            for (let i = 0; i < itemsBinBuffer.length; i++) {
                itemsBinBuffer[i].id = itemsBin.length
            }

            itemsBin.push(itemsBinBuffer[0])
    
            for (let i = idSelected; i < favoriteItems.length; i++) { 
                favoriteItems[i].id--
            }
    
            saveFavoriteItems()
            saveItemsBin()
            renderApp()
    }
}

function itemBinSelector(e){
    let idSelected = parseInt(e.target.id)
    
    if(!isNaN(parseInt(e.target.id))){
        let itemsBinBuffer = []
        itemsBinBuffer = itemsBin.splice(parseInt(e.target.id), 1)
        
        for (let i = 0; i < itemsBinBuffer.length; i++) {
            itemsBinBuffer[i].id = items.length
        }

        items.push(itemsBinBuffer[0])

        for (let i = idSelected; i < itemsBin.length; i++) { 
            itemsBin[i].id--
        }

        saveItems()
        saveItemsBin()
        renderApp()
    }
}

function saveItemsBin(){
    localStorage.setItem("itemsBinArray", JSON.stringify(itemsBin))
}

function loadItemsBin(){
    let loadedData = []
    if (localStorage.getItem("itemsBinArray") == null || loadedData.length < 0) {
    } else { 
        loadedData = localStorage.getItem("itemsBinArray")
        itemsBin = JSON.parse(loadedData)
    }
}

function renderItemsBin(){
    loadItemsBin()

    const itemsBinDisplay = itemsBin
    let appData = ""
    for (let i = 0; i < itemsBinDisplay.length; i++) {
        appData += `
            <div class="item">
                <div class="item-head item-color">
                <p class="item-name">${itemsBinDisplay[i].name}</p>

                <button class="delete-btn">
                    <span id="${itemsBinDisplay[i].id}" class="material-symbols-outlined item-undo-icon">
                        undo
                    </span>
                </button>

                </div>
                <div class="item-data">
                    <p class="category">Food</p>
                    <p class="price">$ ${itemsBinDisplay[i].price}</p>
                </div>
            </div>
       `
    }
       itemsBinList.innerHTML = appData

}

export { renderItemsBin, itemsBin, removeItem }
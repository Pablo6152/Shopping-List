import { favoriteItemsList } from "./Containers.js"
import { items, saveItems } from "./items.js"
import { renderApp } from "./index.js"
import { removeItem } from "./itemsBin.js"

let favoriteItems = []

favoriteItemsList.addEventListener("click", itemFavoriteSelector)

function itemFavoriteSelector(e){

    if (e.target.id == "u"){
        useFavoriteItem(e.target.parentNode.id)
    } else if (e.target.id == "r"){
        removeItem(e.target.parentNode.id, 1)
        console.log(e.target.parentNode.id)
    }
}


function toFavoriteItem(itemId){
    let idSelected = parseInt(itemId)
    
    if(!isNaN(idSelected)){
        let itemsBinBuffer = []
        itemsBinBuffer = items.toSpliced(idSelected, 0)

        for (let i = 0; i < itemsBinBuffer.length; i++) {
            itemsBinBuffer[i].id = favoriteItems.length
        }

        
        favoriteItems.push(itemsBinBuffer[0])

        // Apply correct id to new item in the favorite items array
        // console.log(`Length: ${favoriteItems.length}`)
        // console.log(favoriteItems)
        

        // saveFavoriteItems()

    }
}

function useFavoriteItem(itemId){
    let idSelected = parseInt(itemId)
    
    if(!isNaN(idSelected)){
        let itemsBinBuffer = []
        itemsBinBuffer = favoriteItems.toSpliced(idSelected, 0)
        
        // Apply correct id to new item in the items array
        for (let i = 0; i < itemsBinBuffer.length; i++) {
            itemsBinBuffer[i].id = items.length
        }

        items.push(itemsBinBuffer[0])

        // Reduce the id of every element in the fav items array
        // for (let i = idSelected; i < favoriteItems.length; i++) { 
        //     favoriteItems[i].id--
        // }

        saveItems()
        saveFavoriteItems()
        renderApp()
    }
}

function saveFavoriteItems(){
    localStorage.setItem("FavoriteItemsArray", JSON.stringify(favoriteItems))
}

function loadFavoriteItems(){
    let loadedData = []
    if (localStorage.getItem("FavoriteItemsArray") == null || loadedData.length < 0) {
    } else { 
        loadedData = localStorage.getItem("FavoriteItemsArray")
        favoriteItems = JSON.parse(loadedData)
    }
}

function renderFavoriteItems(){
    loadFavoriteItems()

    const itemsDisplay = favoriteItems
    let appData = ""
    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `
            <div class="item">
                <div class="item-head item-color">
                <p class="item-name">${itemsDisplay[i].name}</p>

                <div id="${itemsDisplay[i].id}" class="item-user-options">
              
                    <span id="u" class="material-symbols-outlined item-use-icon item-icon item-btn">
                            Publish
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

    favoriteItemsList.innerHTML = appData
}

export { favoriteItems, toFavoriteItem, renderFavoriteItems, saveFavoriteItems }
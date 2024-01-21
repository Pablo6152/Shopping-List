import { itemsList, itemBinSectionContainer } from "./Containers.js"
import { saveItems, items } from "./items.js"
import { renderApp } from "./index.js"

let itemsBinContainer = []

itemsList.addEventListener("click", itemSelector)

function itemSelector(e){
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
}

function renderItemsBin(){
    console.log("Items Bin summoned")
}

export { itemSelector, renderItemsBin }
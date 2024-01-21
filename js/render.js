import { renderItems } from "./items.js"
import { renderItemsBin } from "./itemsBin.js"
import { itemSectionContainer, itemBinSectionContainer } from "./Containers.js"
import { currentPage } from "./index.js"

function render(){
    if(currentPage.a == 0){
        itemSectionContainer.classList.remove("hide-window")
        itemBinSectionContainer.classList.add("hide-window")

        // Need to change name due to this function now calculating instead of rendering
        renderItems()
    } else if (currentPage.a == 1){
        itemSectionContainer.classList.add("hide-window")
        itemBinSectionContainer.classList.remove("hide-window")

        renderItemsBin()
    }

}

//

export { render }
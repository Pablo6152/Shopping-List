import { renderItems } from "./items.js"
import { renderFavoriteItems } from "./favoriteItems.js"
import { renderItemsBin } from "./itemsBin.js"
import { 
    itemSectionContainer, 
    sectionTitle,
    favoriteSectionContainer,
    budgetSectionContainer,
    itemBinSectionContainer,
    settingsSectionContainer,
    eraseSectionContainer
} 
from "./Containers.js"
import { appSearch } from "./input.js"

import { currentPage } from "./index.js"

function render(){
    if(currentPage.a == 0){
        itemSectionContainer.classList.remove("hide-window")

        favoriteSectionContainer.classList.add("hide-window")
        budgetSectionContainer.classList.add("hide-window")
        itemBinSectionContainer.classList.add("hide-window")
        settingsSectionContainer.classList.add("hide-window")
        eraseSectionContainer.classList.add("hide-window")
        appSearch.classList.remove("hide-window")
        sectionTitle.textContent = "Shopping helper"

        // Need to change name due to this function now calculating instead of rendering
        renderItems()
    } else if (currentPage.a == 1){
        itemSectionContainer.classList.add("hide-window")

        favoriteSectionContainer.classList.remove("hide-window")

        budgetSectionContainer.classList.add("hide-window")
        itemBinSectionContainer.classList.add("hide-window")
        settingsSectionContainer.classList.add("hide-window")
        eraseSectionContainer.classList.add("hide-window")
        appSearch.classList.remove("hide-window")
        sectionTitle.textContent = "Favorites"

        renderFavoriteItems()
    } else if (currentPage.a == 2){
        itemSectionContainer.classList.add("hide-window")
        favoriteSectionContainer.classList.add("hide-window")

        budgetSectionContainer.classList.remove("hide-window")

        itemBinSectionContainer.classList.add("hide-window")
        settingsSectionContainer.classList.add("hide-window")
        eraseSectionContainer.classList.add("hide-window")
        appSearch.classList.add("hide-window")
        sectionTitle.textContent = "Budget"

    } else if (currentPage.a == 3){
        itemSectionContainer.classList.add("hide-window")
        favoriteSectionContainer.classList.add("hide-window")
        budgetSectionContainer.classList.add("hide-window")

        itemBinSectionContainer.classList.remove("hide-window")

        settingsSectionContainer.classList.add("hide-window")
        eraseSectionContainer.classList.add("hide-window")
        appSearch.classList.remove("hide-window")
        sectionTitle.textContent = "Recycle bin"

        renderItemsBin()
    } else if (currentPage.a == 4){
        itemSectionContainer.classList.add("hide-window")
        favoriteSectionContainer.classList.add("hide-window")
        budgetSectionContainer.classList.add("hide-window")
        itemBinSectionContainer.classList.add("hide-window")

        settingsSectionContainer.classList.remove("hide-window")

        eraseSectionContainer.classList.add("hide-window")
        appSearch.classList.add("hide-window")
        sectionTitle.textContent = "Settings"

    } else if (currentPage.a == 5){
        itemSectionContainer.classList.add("hide-window")
        favoriteSectionContainer.classList.add("hide-window")
        budgetSectionContainer.classList.add("hide-window")
        itemBinSectionContainer.classList.add("hide-window")

        settingsSectionContainer.classList.add("hide-window")

        eraseSectionContainer.classList.remove("hide-window")
        sectionTitle.textContent = "Erase"

    } 
}

export { render }
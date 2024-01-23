import { addContainer, menuContainer, itemSectionContainer } from "./Containers.js"
import { submitItem } from "./items.js"
import { currentPage, renderApp } from "./index.js"


const navAddBtn = document.getElementById("action-add")
const navMenuBtn = document.getElementById("action-menu")
const closeBtn = document.getElementById("close-btn")
const backBtn = document.getElementById("back-btn")
const addItemBtn = document.getElementById("add-item")

// New Menu buttons
const homeAccessBtn = document.getElementById("home-access-btn")
const favoriteAccessBtn = document.getElementById("favorite-access-btn")
const budgetAccessBtn = document.getElementById("budget-access-btn")
const trashBinAccessBtn = document.getElementById("trash-bin-access-btn")

const settingsBinAccessBtn = document.getElementById("settings-access-btn")
const eraseAccessBtn = document.getElementById("erase-access-btn")


// Nav buttons
navAddBtn.addEventListener("click", showAddWindow)
backBtn.addEventListener("click", hideAddWindow)
addItemBtn.addEventListener("click", submitItem)

// New menu btn
navMenuBtn.addEventListener("click", showMenuWindow)
closeBtn.addEventListener("click", hideMenuWindow)

// Switch app sections
homeAccessBtn.addEventListener("click", () => {
    currentPage.a = 0
    hideMenuWindow()
})
favoriteAccessBtn.addEventListener("click", () => {
    currentPage.a = 1
    hideMenuWindow()
})
budgetAccessBtn.addEventListener("click", () => {
    currentPage.a = 2
    hideMenuWindow()
})
trashBinAccessBtn.addEventListener("click", () => {
    currentPage.a = 3
    hideMenuWindow()
})

settingsBinAccessBtn.addEventListener("click", () => {
    currentPage.a = 4
    hideMenuWindow()
})

eraseAccessBtn.addEventListener("click", () => {
    currentPage.a = 5
    console.log(currentPage.a)
    hideMenuWindow()
})


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

export { navAddBtn, navMenuBtn, closeBtn, backBtn, addItemBtn, hideAddWindow }
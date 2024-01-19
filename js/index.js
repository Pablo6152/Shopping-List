const actionAdd = document.getElementById("action-add")
const addContainer = document.getElementById("add-container")
const backButton = document.getElementById("back-btn")
const addItem = document.getElementById("add-item")
const itemAddName = document.getElementById("add-item-name")
const itemAddPrice = document.getElementById("add-item-price")
const itemAddDate = document.getElementById("add-item-date")
const itemsList = document.getElementById("items-list")
const totalContainer = document.getElementById("total-container")
const deleteBtn = document.getElementById("delete-btn")
let items = []
let itemId = 0




itemsList.addEventListener("click", e => {
    // const removedItem = items.filter((item) => item.id == e.target.id);
    
    if(!isNaN(parseInt(e.target.id))){
        let tmpArray = items
        let newArray = tmpArray.splice(1, e.target.id)

        items = newArray

        loadApp()
    }

    
})



function loadApp(){

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

    totalContainer.innerHTML = `
        <p class="total-amount">${total}</p>
    `

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
    
    items.push(
        {
            name: itemAddName.value,
            price: parseInt(itemAddPrice.value),
            date: "01/01/2023",
            id: itemId
        }
    )

    itemId++
    hideAddWindow()
    loadApp()

}



loadApp()
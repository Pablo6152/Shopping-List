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
let items = [
    {
        name: "Docena de huevos",
        price: 100
    }
]

itemsList.addEventListener("click", e => {
    let id = e.target.id
    let tmpArray
    let newArray

    if (typeof id === "number"){
        
        tmpArray = items.reverse()
        newArray = tmpArray.splice(e.target.id, e.target.id)
        items = newArray

        console.log(e.target.id)
    }

    
    console.log(items)
    loadApp()
})

function loadApp(){

    const itemsDisplay = items.reverse()


    let appData = ""
    let total = 0
    
    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `

            <div id="${i}" class="item">
                <div class="item-head item-color">
                <p class="item-name">${itemsDisplay[i].name}</p>
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
            date: "01/01/2023"
        }
    )
    
    hideAddWindow()
    loadApp()

}



loadApp()
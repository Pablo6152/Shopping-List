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
    // {
    //     name: "test0",
    //     price: 5,
    //     date: "01/01/2023",
    //     id: 0
    // },
    // {
    //     name: "test1",
    //     price: 10,
    //     date: "01/01/2023",
    //     id: 1
    // },
    // {
    //     name: "test2",
    //     price: 15,
    //     date: "01/01/2023",
    //     id: 2
    // },
    // {
    //     name: "test3",
    //     price: 20,
    //     date: "01/01/2023",
    //     id: 3
    // },
]



let itemsBinContainer = []

itemsList.addEventListener("click", e => {

    console.log(items)

    let idSelected = parseInt(e.target.id)
    
    if(!isNaN(parseInt(e.target.id))){
        let itemsBinBuffer = []
        itemsBinBuffer = items.splice(parseInt(e.target.id), 1)
        console.log(items.length)
        itemsBinContainer.push(itemsBinBuffer[0])

        for (let i = idSelected; i < items.length; i++) { 
            console.log(items[i].id)
            items[i].id--
        }

        console.log(items)

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

    if(total >= 1){
        totalContainer.innerHTML = `
        <p class="total-amount"><span class="total-amt">$ ${total}</span></p>
    `
    } else{
        totalContainer.innerHTML = `
        <p class="total-amount hidden-total-amount-div">${total}</p>
    `
    }

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
    
    // For Development purposes
    // function GetRandomPrices(max){
    //     return Math.floor(Math.random() * max)
    // }

    items.push(
        {
            // name: `Test subject #${itemId}`,
            // price: GetRandomPrices(5),

            name: itemAddName.value,
            price: parseInt(itemAddPrice.value),
            date: "01/01/2023",
            id: items.length
        }
    )
    console.log(items)

    hideAddWindow()
    loadApp()

}

    // For Development purposes
    // for (let i = 0; i < 5; i++){
    //     submitItem()
    // }

loadApp()
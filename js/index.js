const actionAdd = document.getElementById("action-add")
const addContainer = document.getElementById("add-container")
const backButton = document.getElementById("back-btn")


actionAdd.addEventListener("click", showAddWindow)
backButton.addEventListener("click", hideAddWindow)

function showAddWindow(){
        addContainer.classList.remove("hide-window")
        addContainer.classList.add("show-window")
}

function hideAddWindow(){
    addContainer.classList.add("hide-window")
    addContainer.classList.remove("show-window")
}
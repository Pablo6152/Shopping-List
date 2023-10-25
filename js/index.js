const actionAdd = document.getElementById("action-add")
const addContainer = document.getElementById("add-container")


actionAdd.addEventListener("click", showAddWindow)
addContainer.addEventListener("click", hideAddWindow)

function showAddWindow(){
        addContainer.classList.remove("hide-window")
        addContainer.classList.add("show-window")
}

function hideAddWindow(){
    addContainer.classList.add("hide-window")
    addContainer.classList.remove("show-window")
}
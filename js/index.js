import { loadTheme } from "./theme.js";
import { render } from "./render.js"

const currentPage = {
    aInternal: 0,
    aListener: function(val) {},
    set a(val) {
      this.aInternal = val;
      this.aListener(val);
    },
    get a() {
      return this.aInternal;
    },
    registerListener: function(listener) {
      this.aListener = listener;
    }
}

// Show current page on load
if (localStorage.getItem("currentPage") !== null) {
    currentPage.a = localStorage.getItem("currentPage")
}

currentPage.registerListener(function(val) {
    renderApp()
    localStorage.setItem("currentPage", JSON.stringify(val))
})

function renderApp(){
    render()
}

loadTheme()
renderApp(currentPage.a)

export { renderApp, currentPage }
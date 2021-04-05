import { populateContact } from "./contact";
import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { initializeDomElements } from "./template";

window.onload = () => {

    initializeDomElements(populateHome);

    // tab logic
    let tabs = document.getElementsByClassName("button");
    tabs = Array.from(tabs);
    tabs.forEach(tab => {
        tab.addEventListener("click", goToTab);
    });
}

const goToTab = (event) => {
    let tabName = event.target.textContent;
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    if (tabName === "Home") initializeDomElements(populateHome);
    if (tabName === "Menu") initializeDomElements(populateMenu);
    if (tabName === "Contact") initializeDomElements(populateContact);
}


console.log("working");

import { populateContact } from "./contact";
import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { initializeDomElements } from "./template";

window.onload = () => {
    initializeDomElements(populateContact);
}

console.log("working");

import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { initializeDomElements } from "./template";

window.onload = () => {
    initializeDomElements(populateMenu);
}

console.log("working");

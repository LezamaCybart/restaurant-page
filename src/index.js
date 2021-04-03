import { populateHome } from "./home";
import { initializeDomElements } from "./template";

window.onload = () => {
    initializeDomElements(populateHome);
}

console.log("working");

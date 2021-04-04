const populateMenu = (contentDiv) => {
    let header = document.createElement("header");
    let headerText = document.createElement("Menu");
    header.appendChild(headerText);

    let menuGrid = document.createElement("div");
    menuGrid.classList.add("menugrid");

    let foods = ["Pizza", "Empanadas", "Lomitos", "Hamburguesas", "Papas fritas", "Tartas", "Milanesas", "Pastas"];

    foods.forEach(food => {
        let foodGridItem = document.createElement("div");
        foodGridItem.classList.add("griditem");

        let foodPicture = document.createElement("img");
        foodPicture.classList.add("gridimage");
        foodPicture.src = "../public/images/pizza.jpg"


        let foodName = document.createElement("p");
        foodName.innerHTML = food;

        foodGridItem.appendChild(foodPicture);
        foodGridItem.appendChild(foodName);

        menuGrid.appendChild(foodGridItem);
    })

    contentDiv.appendChild(menuGrid);
}

export { populateMenu };
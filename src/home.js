const populateHome = (contentDiv) => {


    let header = document.createElement("header");
    let headerText = document.createTextNode("Restaurant!!");
    header.appendChild(headerText);

    let description = document.createElement("p");
    let descriptionText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ex culpa fugiat itaque exercitationem modi, asperiores architecto illum vitae quiadipisci porro ? Hic quo tempore, dicta recusandae aliquam quas qui.");
    description.appendChild(descriptionText);


    contentDiv.appendChild(header);
    contentDiv.appendChild(description);
}

export { populateHome };
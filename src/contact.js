
const populateContact = (contentDiv) => {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    let header = document.createElement("header");
    let headerText = document.createTextNode("Contact us");
    header.appendChild(headerText);

    let phoneNumberLabel = document.createElement("h1");
    let phoneNumberLabelText = document.createTextNode("Phone Number");
    phoneNumberLabel.appendChild(phoneNumberLabelText);

    let phoneNumberContent = document.createElement("p");
    let phoneNumber = document.createTextNode("000-555-211");
    phoneNumberContent.appendChild(phoneNumber);

    let emailLabel = document.createElement("h1");
    let emailLabelText = document.createTextNode("Email");
    emailLabel.appendChild(emailLabelText);

    let emailContent = document.createElement("p");
    let email = document.createTextNode("some-email@somedomain.com");
    emailContent.appendChild(email);

    let adressLabel = document.createElement("h1");
    let adressLabelText = document.createTextNode("Some Adress st.");
    adressLabel.appendChild(adressLabelText);

    let adressContent = document.createElement("p");
    let adress = document.createTextNode("Some Adress st.");
    adressContent.appendChild(adress);

    contactDiv.appendChild(header);

    contactDiv.appendChild(phoneNumberLabel);
    contactDiv.appendChild(phoneNumberContent);

    contactDiv.appendChild(emailLabel)
    contactDiv.appendChild(emailContent)

    contactDiv.appendChild(adressLabel)
    contactDiv.appendChild(adressContent)

    contentDiv.appendChild(contactDiv);
}

export { populateContact };
const createTabs = (() => {
    let tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tab");

    let tabNames = ["Home", "Menu", "Contact"];

    tabNames.forEach(name => {
        let tab = document.createElement("button");
        tab.classList.add("tab");
        tab.classList.add("button");
        tab.innerHTML = name;
        tabsDiv.appendChild(tab);
    })

    return {
        tabsDiv
    }
})();

const createFooter = (() => {
    let footer = document.createElement("div");
    let p = document.createElement("p");
    let a = document.createElement("a");
    let icon = document.createElement("i");

    footer.classList.add("footer");

    a.href = "";

    icon.classList.add("fab");
    icon.classList.add("fa-github");
    icon.classList.add("fa-2x");

    a.appendChild(icon);
    p.appendChild(a);
    footer.appendChild(p);

    return {
        footer
    }

})();

const initializeDomElements = (populateTab) => {
    let contentDiv = document.getElementById("content");

    let banner = document.createElement("img");
    banner.src = "../public/images/banner.jpg";


    contentDiv.appendChild(createTabs.tabsDiv);

    contentDiv.appendChild(banner);
    contentDiv.appendChild(createFooter.footer);

    populateTab(contentDiv);
};


export { initializeDomElements };
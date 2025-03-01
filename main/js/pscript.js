// Function to dynamically update navbar brand
function updateNavbarBrand() {
    const navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.innerHTML = '<span style="color: red;">Movie</span>Hai'; // Update brand text with HTML
    navbarBrand.href = "#dynamic-home"; // Update brand link
}

// Function to dynamically update header links
function updateHeaderLinks() {
    const headerLinks = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Docs", href: "#docs" },
        { text: "Terms", href: "#terms" },
    ];

    const headerLinksContainer = document.getElementById("headerLinks");
    headerLinksContainer.innerHTML = headerLinks
        .map(
            (link) => `
            <li class="nav-item">
                <a class="nav-link" href="${link.href}">${link.text}</a>
            </li>
        `
        )
        .join("");
}

// Function to dynamically update footer links
function updateFooterLinks() {
    const footerLinks = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Docs", href: "#docs" },
        { text: "Terms", href: "#terms" },
    ];

    const footerLinksContainer = document.getElementById("footerLinks");
    footerLinksContainer.innerHTML = footerLinks
        .map(
            (link) => `
            <a href="${link.href}">${link.text}</a>
        `
        )
        .join("");
}
// Function to dynamically update the horizontal div content
function updateHorizontalDiv() {
    const dynamicDiv = document.getElementById("dynamicDiv");
    dynamicDiv.innerHTML = `
        <i class="fas fa-heart"></i> <!-- Optional: Change the icon -->
        <span>This content is updated dynamically!</span>
    `;
}

// Call the function to update the horizontal div content
updateHorizontalDiv();

// Call functions to update navbar brand, header links, and footer links
updateNavbarBrand();
updateHeaderLinks();
updateFooterLinks();
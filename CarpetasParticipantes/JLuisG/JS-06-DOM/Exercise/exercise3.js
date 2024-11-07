// Exercise #3
// Write a function and call it when clicking a button to show an alert with:

// The number of links on the page
// The first link in the page
// The last link in the page

function showLinkInfo() {
    const links = document.getElementsByTagName("a");
    const numberOfLinks = links.length;
    const firstLink = links[0].href;
    const lastLink = links[numberOfLinks - 1].href;
    alert(`Cantidad de enlaces: ${numberOfLinks}\nPrimer enlace: ${firstLink}\nÚltimo enlace: ${lastLink}`);
}

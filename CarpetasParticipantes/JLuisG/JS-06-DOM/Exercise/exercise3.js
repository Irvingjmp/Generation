function showLinkInfo() {
    let links = document.getElementsByTagName("a");
    let numberOfLinks = links.length;
    let firstLink = links[0].href;
    let lastLink = links[numberOfLinks - 1].href;

    alert("Numero de enlaces: " + numberOfLinks + "\n" +
        "Primer enlace: " + firstLink + "\n" +
        "Ultimo enlace: " + lastLink);
}

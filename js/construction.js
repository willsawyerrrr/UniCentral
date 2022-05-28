addLoadEvent(setURL);

function setURL() {
    let url = document.getElementById("url");
    url.innerText = window.location.href;
}
var button = document.querySelector("#btn");
var ip = document.querySelector("#input");
var op = document.querySelector("#output");

const handleClick = (e) => {
    fetch("https://api.funtranslations.com/translate/pig-latin.json")
    .then(res => res.json())
    .then(json => op.innerText = json.contents.translated)
}

button.addEventListener("click",handleClick)


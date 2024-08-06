const celebrityNames = [
    "Leonardo DiCaprio",
    "Emma Stone",
    "Chris Hemsworth",
    "Jennifer Lawrence",
    "The Rock"];
const generateBtn = document.getElementById("generate-btn");
const celebrityNameDiv = document.getElementById("celeb-name"); generateBtn.addEventListener("click", () => { const randomArrItem = Math.floor(Math.random() * celebrityNames.length); const randomName = celebrityNames[randomArrItem]; celebrityNameDiv.innerText = randomName; });
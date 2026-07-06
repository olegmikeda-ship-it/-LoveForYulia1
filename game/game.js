const locations = [
{
    name: "Спальня",
    image: "locations/bedroom.jpg",
    text: "Полночь сидел здесь ночью..."
},
{
    name: "Коридор",
    image: "locations/corridor.jpg",
    text: "Следы лап ведут дальше."
},
{
    name: "Кухня",
    image: "locations/kitchen.jpg",
    text: "Миска пустая. Полночь был здесь."
},
{
    name: "Чердак",
    image: "locations/attic.jpg",
    text: "Следы на чердаке ведут к окну."
},
{
    name: "Лес",
    image: "locations/forest.jpg",
    text: "Следы ведут глубоко в лес."
},
{
    name: "Полночь найден",
    image: "locations/final.jpg",
    text: "Полночь найден ❤️"
}
];
let currentLocation = 0;
const background = document.getElementById("background");
const locationName = document.getElementById("locationName");
const storyText = document.getElementById("storyText");
function updateLocation() {
    background.src = locations[currentLocation].image;
    locationName.textContent = locations[currentLocation].name;
    storyText.textContent = "";
}
document.getElementById("leftBtn").onclick = () => {
    if (currentLocation > 0) {
        currentLocation--;
        updateLocation();
    }
};
document.getElementById("rightBtn").onclick = () => {
    if (currentLocation < locations.length - 1) {
        currentLocation++;
        updateLocation();
    }
};
background.onclick = () => {
    storyText.textContent = locations[currentLocation].text;
};
updateLocation();
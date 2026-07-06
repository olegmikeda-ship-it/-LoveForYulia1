const startDate = new Date("2023-06-14T00:00:00");
function word(num, one, two, five) {
    num = Math.abs(num) % 100;
    let n = num % 10;
    if (num > 10 && num < 20) return five;
    if (n > 1 && n < 5) return two;
    if (n == 1) return one;
    return five;
}
function updateLoveTimer() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById("loveTimer").innerHTML =
    `❤️ ${years} ${word(years, "год", "года", "лет")}
    ${months} ${word(months, "месяц", "месяца", "месяцев")}
    ${days} ${word(days, "день", "дня", "дней")}<br>
    ${hours} ${word(hours, "час", "часа", "часов")}
    ${minutes} ${word(minutes, "минута", "минуты", "минут")}
    ${seconds} ${word(seconds, "секунда", "секунды", "секунд")} ❤️`;
}
updateLoveTimer();
setInterval(updateLoveTimer, 1000);
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
function toggleMusic() {
    const music = document.getElementById("music");
    const status = document.getElementById("musicStatus");
    const disc = document.querySelector(".disc");
    if (music.paused) {
        music.play();
        status.innerText = "Играет ❤️";
        disc.style.animationPlayState = "running";
    } else {
        music.pause();
        status.innerText = "Пауза ⏸️";
        disc.style.animationPlayState = "paused";
    }
}
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
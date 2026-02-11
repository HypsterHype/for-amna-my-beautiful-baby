let currentPage = 0;
let score = 0;
const pages = document.querySelectorAll(".page");
const bgMusic = document.getElementById("bgMusic");
const sparkle = document.getElementById("sparkle");

document.body.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
}

const reasons = [
    "Because your smile heals me 💕",
    "Because you're my safe place 🏡",
    "Because you are my best decision 💖",
    "Because loving you feels natural 🌹",
    "Because you are my forever 💍"
];

function showReason() {
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("loveText").innerText = random;
}

function celebrate() {
    sparkle.play();
    alert("Forever Yours, Amna 💖🌌");
}

/* MINI GAME */
const gameArea = document.getElementById("gameArea");

function spawnHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("floating");
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 90 + "%";

    heart.onclick = function() {
        score++;
        document.getElementById("score").innerText = "Hearts Caught: " + score;
        heart.remove();
        if (score >= 10) {
            document.getElementById("secretBtn").style.display = "inline-block";
        }
    };

    gameArea.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

setInterval(spawnHeart, 1000);

/* Hidden Message */
let typed = "";
document.addEventListener("keydown", function(e) {
    typed += e.key.toLowerCase();
    if (typed.includes("iloveyouamna")) {
        document.getElementById("hiddenMessage").style.display = "block";
        sparkle.play();
        typed = "";
    }
});


function openLetter(element) {
    element.classList.toggle("open");
}

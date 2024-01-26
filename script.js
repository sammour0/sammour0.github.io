const dinosaur = document.getElementById("dinosaur");
const ground = document.getElementById("ground");

document.addEventListener("keydown", jump);

function jump(event) {
    if (event.keyCode === 32) { // Space key
        if (!dinosaur.classList.contains("jump")) {
            dinosaur.classList.add("jump");
            setTimeout(() => {
                dinosaur.classList.remove("jump");
            }, 500);
        }
    }
}

function gameLoop() {
    const dinosaurBottom = parseInt(window.getComputedStyle(dinosaur).bottom);

    if (dinosaurBottom > 0) {
        dinosaur.style.bottom = dinosaurBottom - 2 + "px";
    } else {
        dinosaur.style.bottom = "0px";
    }
}

setInterval(gameLoop, 10);

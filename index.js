function butti() {
  
    e = this.innerHTML;
    makesound(e);
    animate(e);
}
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", butti);
}

document.addEventListener("keydown", function (e) {
    val = e.key;
    makesound(val);
    animate(val);
})

function makesound(e) {
    switch (e) {
        case 'a': new Audio('sounds/tom-1.mp3').play(); break;
        case 's': new Audio('sounds/tom-2.mp3').play(); break;
        case 'd': new Audio('sounds/tom-3.mp3').play(); break;
        case 'f': new Audio('sounds/tom-4.mp3').play(); break;
        case 'j': new Audio('sounds/snare.mp3').play(); break;
        case 'k': new Audio('sounds/crash.mp3').play(); break;
        case 'l': new Audio('sounds/kick-bass.mp3').play(); break;
        default: console.log("Use Valid Key")

    }
}

function animate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");

    }, 100)
}
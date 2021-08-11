const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");

// BUTTON CLICK
a.addEventListener("click", () => {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
});

s.addEventListener("click", () => {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
});

d.addEventListener("click", () => {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
});

f.addEventListener("click", () => {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
});

g.addEventListener("click", () => {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
});

h.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
});

j.addEventListener("click", () => {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
});

k.addEventListener("click", () => {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
});

l.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
});

// BUTTON PRESS
window.addEventListener("keydown", (e) =>{
    if (e.key === "a") {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
}   else if (e.key === "s") {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
}   else if (e.key === "d") {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
}   else if (e.key === "f") {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
}   else if (e.key === "g") {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
}   else if (e.key === "h") {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
}   else if (e.key === "j") {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
}   else if (e.key === "k") {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
}   else if (e.key === "l") {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
}
})
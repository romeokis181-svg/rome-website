function hello(){
alert("Welcome to Rome's website 🚀");
}

let music = document.getElementById("music");

function toggleMusic(){

if(music.paused){
music.play();
}else{
music.pause();
}

}

/* typing animation */

let text = [
"Web Developer",
"Tech Learner",
"Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);
}

type();

/* dark mode */

function toggleMode(){

document.body.classList.toggle("light");

}

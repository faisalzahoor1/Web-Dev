let nbutton = document.createElement("button");
nbutton.innerText = "Click me!";
nbutton.style.backgroundColor = "red";
nbutton.style.color= "white";

document.querySelector("body").prepend(nbutton)

// qs:2

let para = document.querySelector("p");

para.classList.add("para2");
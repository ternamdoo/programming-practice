// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
    // another <h1> that says “I’m in a div”
    // a <p> that says “ME TOO!”
    // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector("#container");

const para = document.createElement("p");
para.setAttribute("style", "color: red;");
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.style["color"] = "blue";
h3.textContent = "I'm a blue h3";

container.appendChild(h3);

const div = document.createElement("div");
// div.setAttribute("class", "dom-div");
div.setAttribute("style", "border: solid black; padding: 8px; background-color: pink");

const h1 = document.createElement("hi");
h1.textContent = "I'm in a div";

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(divPara);

container.appendChild(div);
// const button = document.getElementById("btn");

// console.log(button)
// const p_tag = document.getElementsByTagName("p");

// console.log(p_tag);

// const img = document.querySelector("img"); // select element by tag name
// const input = document.querySelector("input[type='text']");
// const last_div = document.querySelector("form > *:last-child");
// const button = document.querySelector(".btn") // select element by class name
// const button = document.querySelector("#btn") // select element by id

// const form = document.querySelector("form")

// const form_btns = form.querySelectorAll(".btn")

// console.log(form_btns);

// const new_div = document.createElement("div");
// const new_paragraph = document.createElement("p");
// const new_link = document.createElement("a");
// const new_image = document.createElement("img");

// new_div.setAttribute("class", "my_div"); // setting a class attribute
// new_paragraph.setAttribute("id", "my_paragraph"); // setting an id attribute
// new_link.setAttribute("href", "https://example.com"); // setting the href attribute
// new_image.setAttribute("src", "https://image-link.png");


// const new_div = document.createElement("div");
// const new_paragraph = document.createElement("p");
// const new_link = document.createElement("a");
// const new_image = document.createElement("img");

// ...

// //creating the textNodes
// const new_div_text = document.createTextNode("Hello world");
// const new_paragraph_text = document.createTextNode("This is a paragraph");
// const new_link_text = document.createTextNode("Click to visit link");

// //append the textsNodes to the elements
// new_div.append(new_div_text);
// new_paragraph.append(new_paragraph_text);
// new_link.append(new_link_text);

// console.log(new_div, new_paragraph, new_link, new_image);


// const container = document.querySelector(".container");

// container.appendChild(new_div);
// container.appendChild(new_paragraph);
// container.appendChild(new_link);
// container.appendChild(new_image);

// const main=document.createElement("main");
// main.getAnimations("id","main");
// const form= document.createElement("form");
// form.getAttribute("id","calc_form");
// const input=document.createElement("input");
// input.setAttribute("id","output");
// input.setAttribute("class","calc_footer");



const output = document.getElementById("output");
const form = document.getElementById("calc_form");
const operand_btns = document.querySelectorAll("button[data-type=operand]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let is_operator = false;
operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "");
    } else if (is_operator) {
      is_operator = false;
      output.value = e.target.value;
    } else {
      output.value = output.value + "" + e.target.value;
    }
  });
});
// Run Pen


Resources
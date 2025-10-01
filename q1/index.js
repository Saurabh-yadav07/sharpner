// Write your code below:
const header = document.querySelector("#header");
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
header.appendChild(subHeading);

const fruitList = document.querySelector(".fruits");
const para = document.createElement("p");
para.textContent = "Total fruits:4";
para.id = "fruits-total";
fruitList.before(para);
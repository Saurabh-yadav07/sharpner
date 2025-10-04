// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const existingFruits = document.querySelectorAll('.fruits .fruit');
existingFruits.forEach((li) => {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fruitToAdd = document.getElementById("fruit-to-add")
    const newLi = document.createElement("li");
    newLi.className = 'fruit';
    newLi.innerHTML = `${fruitToAdd.value} <button class="delete-btn">x</button><button class='edit-btn'>Edit</button>`;
    fruits.appendChild(newLi);
});
fruits.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const fruitTobeDeleted = event.target.parentElement;
        fruits.removeChild(fruitTobeDeleted);
    }
});
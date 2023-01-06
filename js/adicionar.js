let adicionarBtn = document.querySelector(".adicionarBtn");

adicionarBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let criarDiv = document.querySelector(".criar");
    criarDiv.classList.remove("none");

    let navBar = document.querySelector(".navBar");
    navBar.classList.add("none");

    let todoList = document.querySelector(".todoList");
    todoList.classList.add("none");

    adicionarBtn.classList.add("none")
});
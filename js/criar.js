let criarBtn = document.querySelector(".criarBtn");

criarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let inputValue = document.querySelector(".criarInput")
    let titleTarefa = inputValue.value;

    let errors = validate(titleTarefa);

    if(errors.length > 0){
        criarErrors(errors);
        return;
    };

    let navBar = document.querySelector(".navBar");
    navBar.classList.remove("none")

    let todoList = document.querySelector(".todoList");
    todoList.classList.remove("none");

    let adicionarBtn = document.querySelector(".adicionarBtn");
    adicionarBtn.classList.remove("none");

    let tarefa = criarTarefa(titleTarefa);

    todoList.appendChild(tarefa);

    let criarDiv = document.querySelector(".criar");
    criarDiv.classList.add("none");

    inputValue.value = "";

    let ul = document.querySelector(".ulErrorsCriar");
    ul.innerHTML = "";
});


function criarTarefa(titleTarefa){
    let tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    let tarefaTitle = document.createElement("div");
    tarefaTitle.classList.add("tarefa-title");

    let h3 = document.createElement("h3");
    h3.textContent = titleTarefa;
    tarefaTitle.appendChild(h3);

    let buttons = criarButtons();

    tarefa.appendChild(tarefaTitle);
    tarefa.appendChild(buttons);

    return tarefa;
}

function criarButtons(){
    let tarefaBtns = document.createElement("div");
    tarefaBtns.classList.add("tarefa-buttons");

    let check = document.createElement("i");
    check.classList.add("fa-solid");
    check.classList.add("fa-check");

    let trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");

    let pencil = document.createElement("i");
    pencil.classList.add("fa");
    pencil.classList.add("fa-pencil");

    tarefaBtns.appendChild(check);
    tarefaBtns.appendChild(trash);
    tarefaBtns.appendChild(pencil);

    return tarefaBtns;
}

function criarErrors(errors){
    let ul = document.querySelector(".ulErrorsCriar");
    ul.innerHTML = ""

    errors.forEach((erro) => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}
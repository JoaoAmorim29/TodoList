let todoList = document.querySelector(".todoList");
let title;


todoList.addEventListener("click", (e)=>{
    let targetEl = e.target;
    let divButtons = targetEl.parentNode;
    let tarefa = divButtons.parentNode;
    let tarefaTitle = tarefa.querySelector("h3").innerText;
    
    //Concluindo Tarefa
    if (targetEl.classList.contains("fa-check")){
        tarefa.classList.toggle("feito");
    }

    //Removendo Tarefa
    if (targetEl.classList.contains("fa-trash-can")){
        tarefa.classList.add("sumindo");

        setInterval(()=>{
            tarefa.remove()
        }, 600)
    }

    //Editando Tarefa

    if (targetEl.classList.contains("fa-pencil")){
        let editarDiv = document.querySelector(".editar");
        editarDiv.classList.remove("none");

        let navBar = document.querySelector(".navBar");
        navBar.classList.add("none");

        let todoList = document.querySelector(".todoList");
        todoList.classList.add("none");

        adicionarBtn.classList.add("none");

        let inputEdit = editarDiv.querySelector("input");
        inputEdit.value = tarefaTitle
        title = tarefaTitle;
    }
})

let editarBtn = document.querySelector(".editarBtn");
editarBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let editarDiv = document.querySelector(".editar");
    let inputEdit = editarDiv.querySelector("input");
    let inputEditValue = inputEdit.value;

    let errors = validate(inputEditValue);

    if (errors.length > 0){
        criarError(errors);
        return;
    }
 
    atualizar(inputEditValue);

    let ul = document.querySelector(".ulErrorsEdit");
    ul.innerHTML = "";

    let navBar = document.querySelector(".navBar");
    navBar.classList.remove("none")

    let todoList = document.querySelector(".todoList");
    todoList.classList.remove("none");

    let adicionarBtn = document.querySelector(".adicionarBtn");
    adicionarBtn.classList.remove("none");

    editarDiv.classList.add("none");
})

function atualizar(text){
    let tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach((tarefa) => {
        let tarefaTitle = tarefa.querySelector("h3")

        if(tarefaTitle.innerText == title){
            tarefaTitle.textContent = text
        }
    })
}

function criarError(errors){
    let ul = document.querySelector(".ulErrorsEdit");
    ul.innerHTML = ""

    errors.forEach((erro) => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}
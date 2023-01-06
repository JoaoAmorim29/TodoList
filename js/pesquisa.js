let pesquisaInput = document.querySelector("#pesquisaInput");

pesquisaInput.addEventListener("input", ()=>{
    let tarefas = document.querySelectorAll(".tarefa");

    if(pesquisaInput.value.length > 0){
        for(let i = 0; i < tarefas.length; i++){
            let tarefa = tarefas[i];
            let h3 = tarefa.querySelector("h3");
            let tarefaTitle = h3.textContent;
            let expressao = new RegExp(pesquisaInput.value, "i");

            if(!expressao.test(tarefaTitle)){
                tarefa.classList.add("none");
            } else{
                tarefa.classList.remove("none");
            }
        }
    } else{
        for(let i = 0; i < tarefas.length; i++){
            let tarefa = tarefas[i];
            tarefa.classList.remove("none");
        }
    }
});
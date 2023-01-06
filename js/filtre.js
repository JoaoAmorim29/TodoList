let filtroSelect = document.querySelector(".filtroSelect");

filtroSelect.addEventListener("change", ()=>{
    let tarefas = document.querySelectorAll(".tarefa")
    console.log(filtroSelect.value)

    for(let i = 0; i < tarefas.length; i++){
        let tarefa = tarefas[i];

        if(filtroSelect.value == "feitos"){
            if(!tarefa.classList.contains("feito")){
                tarefa.classList.add("none");
            } else{
                tarefa.classList.remove("none");
            }
        } else if(filtroSelect.value == "fazer"){
            if(tarefa.classList.contains("feito")){
                tarefa.classList.add("none");
            } else{
                tarefa.classList.remove("none");
            }
        } else{
            tarefa.classList.remove("none");
        }
    } 

})
let deleteBtn = document.querySelector(".fa-delete-left");

deleteBtn.addEventListener("click", ()=>{
    let input = document.querySelector("#pesquisaInput")
    input.value = "";
})
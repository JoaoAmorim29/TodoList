function validate(campo){
    let errors = [];
    
    if(campo.length == 0){
        errors.push("Campo obrigatório");
    }

    if(campo.length > 25){
        errors.push("Campo só pode conter no máximo 25 caracteres");
    }

    return errors;
}
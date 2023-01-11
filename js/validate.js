function validate(campo){
    let errors = [];
    let windowWidth = window.innerWidth
    
    if(campo.length == 0){
        errors.push("Campo obrigatório");
    }

    if (windowWidth >= 400){
        if(campo.length > 25){
            errors.push("Campo só pode conter no máximo 25 caracteres");
        }
    } else if (windowWidth >= 350){
        if(campo.length > 15){
            errors.push("Campo só pode conter no máximo 15 caracteres");
        }
    } else if (windowWidth >= 300){
        if(campo.length > 12){
            errors.push("Campo só pode conter no máximo 12 caracteres");
        }
    }

    return errors;
}
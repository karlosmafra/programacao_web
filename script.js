let dom = document
let h1 = document.getElementById("titulo")

function submit()
{
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let cpf = document.getElementById("cpf").value

    if (validaCpf(cpf))
    {
        alert(cpf)
    }
}

function validaCpf(cpf) 
{
    if (cpf == "")
    {
        alert("campo CPF não pode ser vazio")
        return false
    }

    cpf = cpf.trim()

    if (/[a-zA-Z]/.test(cpf)) 
    {
        alert("CPF não pode conter letras")
        return false
    }

    if (!/^[\d.-]+$/.test(cpf)) 
    {
        alert("CPF só pode conter números, '.' ou '-'")
        return false
    }

    if (cpf.length != 11 && cpf.length != 14)
    {
        alert("Formato inválido")
        return false
    }

    // Verificar se os . e - estão no local correto ou se não tem 

    if (cpf.length == 11 && !/^[\d]+$/.test(cpf))
    {
        alert("Formato inválido")
        return false
    }

    // Não funciona //
    if (cpf.length == 14 && !/[\d\d\d.\d\d\d.\d\d\d.\d\d]/.test(cpf))
    {
        alert("Formato inválido")
        return false
    }

    // Algoritmo para validar cpf

    cpf = (cpf.replaceAll('.', ''))
    cpf = (cpf.replaceAll('-', ''))

    // Primeiro dígito
    soma = 0

    for (i = 0; i < 9; i++)
    {
        soma += parseInt(cpf.substring(i, i+1)) * (10 - i)
    }

    resto = soma * 10 % 11
    if (resto == 10)
    {
        resto = 0
    }

    if (resto != cpf.substring(9, 10))
    {
        alert("CPF inválido")
        return false
    }

    // Segundo dígito
    soma = 0

    for (i = 0; i < 10; i++)
    {
        soma += parseInt(cpf.substring(i, i+1)) * (11 - i)
    }
    
    resto = soma * 10 % 11
    if (resto == 10)
    {
        resto = 0
    }

    if (resto != cpf.substring(10, 11))
    {
        alert("CPF inválido")
        return false
    }

    return true
}
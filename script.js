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
        alert("CPF só pode conter números, '.' ou ','")
        return false
    }

    return true
}
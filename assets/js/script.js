let nome = window.document.getElementById("name")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    if(nome.value.length < 3){
        alert("nome invalido")
    }
}

function validaEmail(){
    let textEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") = -1){
        textEmail.innerHTML = "E-mail inválido"
        textEmail
    }
}
let nome = window.document.getElementById("nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

// nome.style.width = '100%'
// email.style.width = '100%'

function validaNome(){
    let textNome = document.querySelector("#txtNome")

    if(nome.value.length < 3){
        textNome.innerHTML = "Nome Inválido"
        textNome.style.color = "red"
    }else{
        textNome.innerHTML = "Nome Válido"
        textNome.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let textEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        textEmail.innerHTML = "E-mail Inválido"
        textEmail.style.color = "red"
    }else{
        textEmail.innerHTML = "Em-ail Váilido"
        textEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true

    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assunto == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
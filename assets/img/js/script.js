/*
por tag: getElementByTagName()
por Id: getElementeById()
por Nome: getElementsByName()
por Classe: getElementsByClassesName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let sugestao = document.querySelector('#sugestao')
let nomeOk = false
let emailOk = false
let sugestaoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
   let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txtNome.innerHTML = 'Nome Inválido' 
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }
 
 function validaSugestao() {
    let txtSugestao = document.querySelector('#txtSugestao')
 
    if (sugestao.value.length >= 100) {
       txtSugestao.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtSugestao.style.color = 'red'
       txtSugestao.style.display = 'block'
    } else {
       txtSugestao.style.display = 'none'
       sugestaoOk = true
    }
 }
 
 function enviar() {
    if (nomeOk == true && emailOk == true && sugestaoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
 
 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }
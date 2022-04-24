let firstName = document.querySelector('input#name')
let surname = document.querySelector('input#surname')
let email = document.querySelector('input#email')
let phone = document.querySelector('input#phone')
let submit = document.querySelector('button#subButton')
let message = document.querySelector('textarea#message')

submit.addEventListener('click', sent)

function sent () {    
    if (firstName.value == 0 || surname.value == 0 || email.value == 0 || phone.value == 0 || message.value == 0){        
        window.alert('Todos os dados são obrigatórios. Por favor, verifique e tente novamente.')
    }else {

        firstName.value = ''
        surname.value = ''
        email.value = ''
        phone.value = ''
        submit.value = ''
        message.value = ''

        alert('Recebemos a sua mensagem. Obrigado pelo contato.')           
    }      
                
}

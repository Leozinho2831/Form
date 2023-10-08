function animationCard(){
    const card = document.querySelector('.form__capa');
    const titleCard = document.querySelector('.form__capa h1');

    if(card){
        if(card.classList.contains('sing')){
            card.classList.remove('sing');
            card.classList.add('sing__out');
            titleCard.innerHTML = 'Sing-up';
            
        } else {
            card.classList.add('sing');
            card.classList.remove('sing__out');
            titleCard.innerHTML = 'Login';
        }
    }
}

function visibilityPassword(){
    const passwordInput = document.querySelectorAll('.form__password');

    if(passwordInput){
        passwordInput.forEach(function(input){
            input.classList.toggle('visibility');

            if(input.classList.contains('visibility')) {
                input.type = 'password';
            } else {
                input.type = 'text';
            }
        });
    }
}
document.querySelector('.showPass').addEventListener('click', event => {
    const PassChamp = document.getElementById('password');
    if(PassChamp.type === 'text'){
        PassChamp.type = 'password';
    } else {
        PassChamp.type = 'text';
    }
});

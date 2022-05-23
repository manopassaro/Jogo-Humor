const meuStatus = document.querySelector('#sit');
const foto = document.querySelector('#foto');
const descricao = document.querySelector('#frase');
let Btn = document.querySelector('#change');

Btn.addEventListener('click', () =>{
    if(Btn.value == '1'){
        meuStatus.innerText = 'Bravo';
        foto.src = './img/cagando.png';
        descricao.innerText = 'Akinator está com dificuldade em adivinhar...'
        Btn.value = '2';
    }else if(Btn.value == '2'){
        meuStatus.innerText = 'Pensativo';
        foto.src = './img/pensativo.png';
        descricao.innerText = 'Akinator está pensando.'
        Btn.value = '3';
    }else{
        meuStatus.innerText = 'Feliz';
        foto.src = './img/adivinhou.png';
        descricao.innerText = 'Akinator adivinhou a pessoa que você estava pensando.'
        Btn.value = '1'
    }
});
let bHistoria = document.getElementById('bHistoria');
let bCreador = document.getElementById('bCreador');
let bCaract = document.getElementById('bCaract');
let meGusta = document.getElementById('meGusta');
let noMeGusta = document.getElementById('noMeGusta');
let cajaHistoria = document.getElementById('cajaHistoria');
let cajaCaract = document.getElementById('cajaCaract');
let cajaCreador = document.getElementById('cajaCreador');
let contadorMeGusta = 0;
let contadorNoMeGusta = 0;

meGusta.addEventListener('click', function (){
    contadorMeGusta++;
    localStorage.setItem('megusta',contadorMeGusta);
});

noMeGusta.addEventListener('click', function (){
    contadorNoMeGusta++;
    localStorage.setItem('nomegusta',contadorNoMeGusta);
});




bHistoria.addEventListener('click', function(){
    if(cajaHistoria.style.display == 'block'){
        cajaHistoria.style.display = 'none';
    } else {
        cajaHistoria.style.display = 'block';
    }
    cajaCreador.style.display = 'none';
    cajaCaracteristicas.style.display = 'none';
});

bCreador.addEventListener('click', function(){
    if(cajaCreador.style.display == 'block'){
        cajaCreador.style.display = 'none';
    } else {
        cajaCreador.style.display = 'block';
    }
    cajaHistoria.style.display = 'none';
    cajaCaract.style.display = 'none';
});

bCaract.addEventListener('click', function(){
    if(cajaCaract.style.display == 'block'){
        cajaCaract.style.display = 'none';
    } else {
        cajaCaract.style.display = 'block';
    }
    cajaHistoria.style.display = 'none';
    cajaCreador.style.display = 'none';
});
// Obtenemos el botón y la caja oculta por su ID
let bHistoria = document.getElementById('bHistoria');
let cajaHistoria = document.getElementById('cajaHistoria');
let bCreador = document.getElementById('bCreador');
let cajaCreador = document.getElementById('cajaCreador');
let bCaract = document.getElementById('bCaract');
let cajaCaract = document.getElementById('cajaCaract');
let meGusta = document.getElementById('meGusta');
let noMeGusta = document.getElementById('noMeGusta');

// Agregamos un escuchador de eventos al botón
bHistoria.addEventListener('click', function(){
    // Cambiamos el estilo de la caja para que sea visible al hacer clic en el botón
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


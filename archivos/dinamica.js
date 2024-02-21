const paginaWeb = {
    botones: {
      bHistoria: document.getElementById('bHistoria'),
      bCreador: document.getElementById('bCreador'),
      bCaract: document.getElementById('bCaract'),
      meGusta: document.getElementById('meGusta'),
      noMeGusta: document.getElementById('noMeGusta'),
    },
    cajas: {
      cajaHistoria: document.getElementById('cajaHistoria'),
      cajaCaract: document.getElementById('cajaCaract'),
      cajaCreador: document.getElementById('cajaCreador'),
    },
    contadores: {
      meGusta: 0,
      noMeGusta: 0,
    },
};

paginaWeb.contadores.meGusta = parseInt(localStorage.getItem('megusta')) || 0;

let contadorMG = document.getElementById('contadorMG');
contadorMG.innerText = paginaWeb.contadores.meGusta;

paginaWeb.botones.meGusta.addEventListener('click', function () {
    paginaWeb.contadores.meGusta++;
    localStorage.setItem('megusta', paginaWeb.contadores.meGusta);
    contadorMG.innerText = paginaWeb.contadores.meGusta;
});

paginaWeb.contadores.noMeGusta = parseInt(localStorage.getItem('nomegusta')) || 0;

let contadornoMG = document.getElementById('contadornoMG');
contadornoMG.innerText = paginaWeb.contadores.noMeGusta;

paginaWeb.botones.noMeGusta.addEventListener('click', function () {
    paginaWeb.contadores.noMeGusta++;
    localStorage.setItem('nomegusta', paginaWeb.contadores.noMeGusta);
    contadornoMG.innerText = paginaWeb.contadores.noMeGusta;
});

paginaWeb.botones.bHistoria.addEventListener('click', function () {
    Visibilidad(paginaWeb.cajas.cajaHistoria);
    EsconderCajas(paginaWeb.cajas.cajaCreador, paginaWeb.cajas.cajaCaract);
});

paginaWeb.botones.bCreador.addEventListener('click', function () {
    Visibilidad(paginaWeb.cajas.cajaCreador);
    EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCaract);
});

paginaWeb.botones.bCaract.addEventListener('click', function () {
    Visibilidad(paginaWeb.cajas.cajaCaract);
    EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCreador);
});


function Visibilidad(elemento) {
    elemento.style.display = (elemento.style.display === 'block') ? 'none' : 'block';
}

function EsconderCajas(...cajas) {
    cajas.forEach(caja => {
      caja.style.display = 'none';
    });
}
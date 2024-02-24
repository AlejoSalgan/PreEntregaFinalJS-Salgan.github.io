const paginaWeb = {
    botones: {
      bHistoria: document.getElementById('bHistoria'),
      bCreador: document.getElementById('bCreador'),
      bCaract: document.getElementById('bCaract'),
      bModelos: document.getElementById('bModelos'),
      meGusta: document.getElementById('meGusta'),
      noMeGusta: document.getElementById('noMeGusta'),
    },
    cajas: {
      cajaHistoria: document.getElementById('cajaHistoria'),
      cajaCaract: document.getElementById('cajaCaract'),
      cajaCreador: document.getElementById('cajaCreador'),
      cajaModelos: document.getElementById('cajaModelos')
    },
    contadores: {
      meGusta: 0,
      noMeGusta: 0,
    },
};

fetch("./modelos.json")
  .then(response => response.json())
  .then(data => (abrirModelos(data)))
  .catch(error => console.error("Error al obtener los datos:", error));

function abrirModelos(modelos) {
  paginaWeb.botones.bModelos.addEventListener('click', function () {
      if (cajaModelos.style.display === 'block' || cajaModelos.style.display === '') {
        // Si los modelos están visibles, oculta el párrafo
        cajaModelos.innerHTML = "";
        cajaModelos.style.display = 'none';
      } else {
        // Si los modelos no están visibles, muestra el párrafo con los datos
        let modelosString = "";
        modelos.forEach(modelo => {
          modelosString += `Nombre: ${modelo.nombre}, Año: ${modelo.año}<br>`;
        });
        cajaModelos.innerHTML = modelosString;
        cajaModelos.style.display = 'block';
      }
    });
}

function generarUsuario() {
  const usuario = {
    nombre: 'usuario' + Math.floor(Math.random() * 1000)
  };
  return usuario; 
}

const usuarioGenerado = generarUsuario(); 
const usuario = [usuarioGenerado];

document.addEventListener('DOMContentLoaded', function() {
  Swal.fire({
    title: 'Bienvenido',
    text: `${usuarioGenerado.nombre}`,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  });
  setTimeout(() => {
    Swal.close();
  }, 2000)
});

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
    EsconderCajas(paginaWeb.cajas.cajaCreador, paginaWeb.cajas.cajaCaract, paginaWeb.cajas.cajaModelos);
});

paginaWeb.botones.bCreador.addEventListener('click', function () {
    Visibilidad(paginaWeb.cajas.cajaCreador);
    EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCaract, paginaWeb.cajas.cajaModelos);
});

paginaWeb.botones.bCaract.addEventListener('click', function () {
    Visibilidad(paginaWeb.cajas.cajaCaract);
    EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCreador, paginaWeb.cajas.cajaModelos);
});

paginaWeb.botones.bModelos.addEventListener('click', function () {
  EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCreador, paginaWeb.cajas.cajaCaract);
});

function Visibilidad(elemento) {
    elemento.style.display = (elemento.style.display === 'block') ? 'none' : 'block';
}

function EsconderCajas(...cajas) {
    cajas.forEach(caja => {
      caja.style.display = 'none';
    });
}
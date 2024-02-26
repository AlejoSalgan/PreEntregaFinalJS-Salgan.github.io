//Acá guarde todos los botones y las cajas

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
      cajaModelos: document.getElementById('cajaModelos'),
      textoModelos: document.getElementById('textoModelos')
    },
    contadores: {
      meGusta: 0,
      noMeGusta: 0,
    },
};

//Acá guardo la API Fetch y la rescato
fetch("./modelos.json")
  .then(response => response.json())
  .then(data => (abrirModelos(data)))
  .catch(error => console.error("Error al obtener los datos:", error));

//Acá muestro en un parrafo la API que guardó los modelos de los autos
function abrirModelos(modelos) {
  paginaWeb.botones.bModelos.addEventListener('click', function () {
        let modelosString = "";
        modelos.forEach(modelo => {
          modelosString += `Nombre: ${modelo.nombre}, Año: ${modelo.año}<br>`;
        });
        textoModelos.innerHTML = modelosString;
        textoModelos.style.display = 'block';
  });
}

//Acá genero una libreria con el nombre de usuario de manera aleatoria
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

//Acá guardo los me gusta en el Storage
paginaWeb.contadores.meGusta = parseInt(localStorage.getItem('megusta')) || 0;

let contadorMG = document.getElementById('contadorMG');
contadorMG.innerText = paginaWeb.contadores.meGusta;

//Acá los muestro en pantalla
paginaWeb.botones.meGusta.addEventListener('click', function () {
    paginaWeb.contadores.meGusta++;
    localStorage.setItem('megusta', paginaWeb.contadores.meGusta);
    contadorMG.innerText = paginaWeb.contadores.meGusta;
});

//Acá guardo los no me gusta en el Storage
paginaWeb.contadores.noMeGusta = parseInt(localStorage.getItem('nomegusta')) || 0;

let contadornoMG = document.getElementById('contadornoMG');
contadornoMG.innerText = paginaWeb.contadores.noMeGusta;

//Acá los muestro en pantalla
paginaWeb.botones.noMeGusta.addEventListener('click', function () {
    paginaWeb.contadores.noMeGusta++;
    localStorage.setItem('nomegusta', paginaWeb.contadores.noMeGusta);
    contadornoMG.innerText = paginaWeb.contadores.noMeGusta;
});

//Acá en esta parte hago que desaparezcan o aparezcan las cajas con los parrafos correspondientes de cada boton
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
  Visibilidad(paginaWeb.cajas.cajaModelos);
  EsconderCajas(paginaWeb.cajas.cajaHistoria, paginaWeb.cajas.cajaCreador, paginaWeb.cajas.cajaCaract);
});


//Acá esta las funciones que generan la visibilidad o la desaparicion de las cajas cada vez que se hace click en una
function Visibilidad(elemento) {
    elemento.style.display = (elemento.style.display === 'block') ? 'none' : 'block';
}

function EsconderCajas(...cajas) {
    cajas.forEach(caja => {
      caja.style.display = 'none';
    });
}
let carrito = [];

function anadir(producto) {
  carrito.push(producto);
  document.getElementById('contador').textContent = carrito.length;
  console.log('Añadido:', producto);

}

document.getElementById('btn-menu').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('abierto');

});

const botonesAnadir = document.querySelectorAll('.btn-anadir');

botonesAnadir.forEach(boton => {
  boton.addEventListener('click', function () {

    const producto = this.getAttribute('datos-producto');
    anadir(producto);

  });
  
});
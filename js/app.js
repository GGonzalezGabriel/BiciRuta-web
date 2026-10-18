let carrito = [];
  function anadir(producto) {
    carrito.push(producto);
    document.getElementById('contador').textContent = carrito.lenght;
    console.log('Añadido:', producto);
  }
  document.getElementById('boton-menu').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('abierto');


const botonesAnadir = document.querySelectorAll('.btn-anadir');

botonesAnadir.forEach(boton => {
  boton.addEventListener('click', function () {
   
    const producto = this.getAttribute('datos-producto');
    anadir(producto);
  });
});

document.getElementById('btn-menu').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('abierto');
});


  });
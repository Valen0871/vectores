let nombres = [];
function cargarNombres() 
{
  let inputs = document.querySelectorAll('.nombre-inp');
  nombres = [];
  inputs.forEach(function(input) 
  {
    if (input.value.trim() !== '') 
    {
      nombres.push(input.value.trim());
    }
  });
  document.getElementById('array-display').textContent = 'Array: ' + nombres.join(', ');
  document.getElementById('cantidad').textContent = 'Cantidad: ' + nombres.length + ' elementos';
}

function ordenarNombres() 
{
  nombres.sort();
  document.getElementById('array-display').textContent = 'Array ordenado: ' + nombres.join(', ');
}

function buscarNombre() 
{
  let buscar = document.getElementById('buscar-input').value.trim();
  let resultado = document.getElementById('resultado-busqueda');
  let idx = nombres.indexOf(buscar);
  if (idx !== -1) 
  {
    resultado.textContent = '"' + buscar + '" encontrado en el índice ' + idx;
  } 
  else 
  {
    resultado.textContent = '"' + buscar + '" no está en el array';
  }
}
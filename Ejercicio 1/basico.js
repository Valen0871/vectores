let musica = [];
function mostrarArray() 
{
    document.getElementById('array-display').textContent = "Array: " + musica.join(", ");
}

function log(msg) 
{
  document.getElementById('log').textContent = msg;
}

function Crear() 
{
    musica = ["Jazz", "Blues"];
    mostrarArray();
    log('Array creado con Jazz y Blues.');
}

function Push()
{
    musica.push("Rock-n-Roll");
    mostrarArray();
    log('Se agregó "Rock-n-Roll" al final.');
}

function Medio()
{
    let idx = Math.floor(musica.length / 2);
    musica[idx] = "Classics";
    mostrarArray();
    log('Se reemplazó el índice ' + idx + ' por "Classics".');
}

function Shift() 
{
    let quitado = musica.shift();
    mostrarArray();
    log('Se quitó el primer elemento: "' + quitado + '"');
}

function ej1Unshift() 
{
    musica.unshift("Rap", "Reggae");
    mostrarArray();
    log('Se antepusieron "Rap" y "Reggae".');
}

function ej1Reset() 
{
    musica = [];
    document.getElementById('array-display').textContent = '';
    document.getElementById('log').textContent = '';
}
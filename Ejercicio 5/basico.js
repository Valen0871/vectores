let numeros = [];
let resultado = document.getElementById("resultado");
for (let i = 0; i < 6; i++) 
{
    numeros.push(parseFloat(prompt("Ingrese un número:")));
}
resultado.innerHTML += "<h2>Array original</h2>";
resultado.innerHTML += numeros.join(" - ");

console.log("Array original:", numeros);

numeros.sort((a, b) => a - b);
resultado.innerHTML += "<h2>Array ordenado</h2>";
resultado.innerHTML += numeros.join(" - ");
console.log("Array ordenado:", numeros);

resultado.innerHTML += "<h2>Cantidad de elementos</h2>";
resultado.innerHTML += numeros.length;

let buscar = parseFloat(prompt("Ingrese un número a buscar:"));
let indice = numeros.indexOf(buscar);

resultado.innerHTML += "<h2>Búsqueda</h2>";

if (indice !== -1) 
{
    resultado.innerHTML += `El número ${buscar} se encuentra en la posición ${indice}`;
} 
else 
{
    resultado.innerHTML += "Número no encontrado";
}
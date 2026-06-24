const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
function buscarDia() 
{
    let n = parseInt(document.getElementById('dia-input').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(n) || n < 0 || n > 6) 
    {
        resultado.textContent = 'Ingresá un número válido entre 0 y 6.';
    } 
    else 
    {
        resultado.textContent = 'El día ' + n + ' es: ' + dias[n];
    }
}
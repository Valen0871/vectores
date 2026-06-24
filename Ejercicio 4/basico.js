let numeros = [];
let opcion;

do {
    opcion = prompt(
        "MENÚ\n" +
        "1- Agregar número\n" +
        "2- Buscar número\n" +
        "3- Modificar número\n" +
        "4- Eliminar número\n" +
        "5- Insertar número en posición\n" +
        "6- Mostrar array\n" +
        "7- Salir"
    );

    switch (opcion) {
        case "1":
            let agregar = parseFloat(prompt("Ingrese un número:"));
            numeros.push(agregar);
            break;

        case "2":
            let buscar = parseFloat(prompt("Número a buscar:"));
            let indice = numeros.indexOf(buscar);

            if (indice !== -1) {
                alert("Encontrado en la posición " + indice);
            } else {
                alert("No encontrado");
            }
            break;

        case "3":
            let posMod = parseInt(prompt("Posición a modificar:"));
            let nuevo = parseFloat(prompt("Nuevo valor:"));

            if (posMod >= 0 && posMod < numeros.length) {
                numeros[posMod] = nuevo;
                alert("Número modificado");
            } else {
                alert("Posición inválida");
            }
            break;

        case "4":
            let eliminar = parseFloat(prompt("Número a eliminar:"));
            let posElim = numeros.indexOf(eliminar);

            if (posElim !== -1) {
                numeros.splice(posElim, 1);
                alert("Número eliminado");
            } else {
                alert("Número no encontrado");
            }
            break;

        case "5":
            let insertar = parseFloat(prompt("Número a insertar:"));
            let posicion = parseInt(prompt("Posición donde insertar:"));

            numeros.splice(posicion, 0, insertar);
            alert("Número insertado");
            break;

        case "6":
            alert("Array: " + numeros);
            console.log(numeros);
            break;

        case "7":
            alert("Fin del programa");
            break;

        default:
            alert("Opción incorrecta");
    }

} while (opcion !== "7");
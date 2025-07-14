// Ejercicios
console.log("Conexión con js establecida...");

/*Edad para votar 
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o más) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Condición if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " Aprobada para votar. ");
    } else if (edad >= 0 && edad < 18) {
        alert("Su edad " + edad + " no está aprobada para votar.");
    } else {
        alert("Ingrese un valor válido");
    }
};

//Segundo ejercicio

function contrasenaValida() {
    let clave = "1234";
    let contra = prompt("Ingresar contraseña: ");
    if (contra == clave) {
        // Con "==" es una comparación o igual. En cambio, si es "=", es para asignar un valor
        alert("Contraseña válida.");
    } else {
        alert("Contraseña erronea.");
    }
}

//Tercer ejercicio

function verificarPar() {
    let verificar = parseInt(prompt("El número es par? "));
    if (verificar % 2 == 0) {
        alert("Es par.")
    } else {
        alert("Es impar.")
    }
}

//Cuarto ejercicio

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace Calor.");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable")
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace Frío.")
    } else {
        alert("Ingrese un valor válido.")
    }
}

//Quinto ejercicio

function compararNumeros(){
    let num1 = parseInt(prompt("Ingresar primer numero: "));
    let num2 = parseInt(prompt("Ingresar segundo numero: "));
    if (num1 < num2){
        alert("El numero " + num1 + " es menor que " + num2)
    } else if (num1 == num2){
        alert("El numero " + num1 + " es igual que " + num2)
    } else{
        alert("El numero " + num1 + " es mayor que " + num2);
    }
}


function calificaciónEscolar(){
    let ingresa = parseInt(prompt("Ingresa tu nota: "));
      if (ingresa <= 4){
        alert("Desaprobado")
      }else if (ingresa >4 && ingresa <=7){
        alert("Aprobado")
      } else{
        alert("Ingreseun valor válido")
      }
}

function usuario(){
    let userName = prompt("Ingrese su usuario: ");
    let user = "admin";
    if (userName == user){
        alert("Bienvenido, administrador.")
    } else{
        alert("Usuario no reconocido")
    }
}

function palabraMayuscula(){
    let letra = prompt("Ingresa palabra")
    let letraA = "A";
    if (letra[0] == letraA){
        alert("la palabra comienza con a mayúscula")
    } else{
        alert("la palabra no comienza con a mayúscula")
    }
}



function precio(){
    //Creación de la función
    //Añadir un porcentaje de descuento e IVA y mostrar.
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20"));
    descuento /= 100; //operación para llevar decimal
    let precioDescuento = parseFloat(prompt("Ingrese el precio del producto"));
    if (precioDescuento > 10000){
         alert(`El valor ingresado fue: ${precio})\n
        IVA: ${precio * IVA}\n
            Precio total: ${precio * 1.19}\n
        `);
    } else{
        alert("precio normal");
    }
}


/*Verificar souna persona puede conducir
Solicita la edad del usuario y si tiene licencia (por ejemplo,
respondiendo "sí"  o "no"). Si tiene 18 o más y respondió que
tiene licencia, muestra "Puede conducir". Si no, muestra "No puede conducir". */

function licenciaEdad(){
    let edad = parseInt(prompt("Ingrese su Edad: "));
    if(edad >= 18 && edad < 100){
        let licencia = prompt("Indica si tienes licencia ai/no");
        if(licencia == "si"){
            alert("Usted puede conducir!");
        }else{
            alert("No puede conducir")
        }
    }else{
        alert("Ingrese valores válidos!");
    }
    }

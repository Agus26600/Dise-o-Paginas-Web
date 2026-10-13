function suma() {
    // Declara la función "suma". Se ejecutará al hacer clic en el botón "+".
    
    // 1. Obtenemos los valores de las cajas y los convertimos a número
    let x = parseFloat(document.getElementById("num1").value);
    // Declara variable "x". Busca el input con id="num1". Toma su valor (texto).
    // parseFloat lo convierte a número decimal. Lo guarda en x.
    
    let y = parseFloat(document.getElementById("num2").value);
    // Declara variable "y". Busca el input con id="num2". Toma su valor.
    // Lo convierte a número decimal. Lo guarda en y.
    
    document.getElementById("resultado").value = x + y;
    // Busca el input con id="resultado". Le asigna el resultado de x + y.
    // El resultado aparece en esa caja de texto.
}

function resta() {
    // Declara la función "resta". Se ejecutará al hacer clic en el botón "-".
    
    let x = parseFloat(document.getElementById("num1").value);
    // Declara "x" con el valor numérico del input "num1".
    
    let y = parseFloat(document.getElementById("num2").value);
    // Declara "y" con el valor numérico del input "num2".
    
    document.getElementById("resultado").value = x - y;
    // Asigna al input "resultado" el valor de x - y (la resta).
}

function multiplicacion() {
    // Declara la función "multiplicacion". Se ejecutará al hacer clic en el botón "*".
    
    let x = parseFloat(document.getElementById("num1").value);
    // Declara "x" con el valor numérico del input "num1".
    
    let y = parseFloat(document.getElementById("num2").value);
    // Declara "y" con el valor numérico del input "num2".
    
    document.getElementById("resultado").value = x * y;
    // Asigna al input "resultado" el valor de x * y (la multiplicación).
}

function division() {
    // Declara la función "division". Se ejecutará al hacer clic en el botón "/".
    
    let x = parseFloat(document.getElementById("num1").value);
    // Declara "x" con el valor numérico del input "num1".
    
    let y = parseFloat(document.getElementById("num2").value);
    // Declara "y" con el valor numérico del input "num2".
    
    if (y === 0) {
        // Comprueba si "y" es exactamente igual a 0.
        // Si es así, entra al bloque para evitar el error matemático.
        
        alert("No se puede dividir entre cero");
        // Muestra una alerta al usuario con el mensaje.
        
        return;
        // Sale de la función sin ejecutar la división.
    }
    // Cierra el bloque "if".
    
    document.getElementById("resultado").value = x / y;
    // Si "y" no es cero, asigna al input "resultado" el valor de x / y.
}

function raiz() {
    // Declara la función "raiz". Se ejecutará al hacer clic en el botón "√".
    
    let x = parseFloat(document.getElementById("num1").value);
    // Declara "x" con el valor numérico del input "num1".
    // Solo usa "num1" porque la raíz es una operación unaria (un solo número).
    
    if (x < 0) {
        // Comprueba si "x" es negativo (menor que 0).
        // Si es así, entra al bloque porque la raíz de un negativo no existe en reales.
        
        alert("No existe raíz cuadrada de un número negativo");
        // Muestra una alerta con el mensaje.
        
        return;
        // Sale de la función sin calcular la raíz.
    }
    // Cierra el bloque "if".
    
    document.getElementById("resultado").value = Math.sqrt(x);
    // Calcula la raíz cuadrada de "x" usando Math.sqrt().
    // Asigna el resultado al input "resultado".
}

function divisionUnidad() {
    // Declara la función "divisionUnidad". Se ejecutará al hacer clic en el botón "1/x".
    
    let x = parseFloat(document.getElementById("num1").value);
    // Declara "x" con el valor numérico del input "num1".
    // Solo usa "num1" porque 1/x es una operación unaria.
    
    if (x === 0) {
        // Comprueba si "x" es exactamente igual a 0.
        // Si es así, entra al bloque porque 1/0 es un error matemático.
        
        alert("No se puede dividir entre cero");
        // Muestra una alerta con el mensaje.
        
        return;
        // Sale de la función sin calcular.
    }
    // Cierra el bloque "if".
    
    document.getElementById("resultado").value = 1 / x;
    // Calcula 1 dividido entre "x" (el recíproco de x).
    // Asigna el resultado al input "resultado".
}

function validarBusqueda() {
    // 1. Obtenemos el campo de entrada de la búsqueda
    let campo = document.getElementById("campoBusqueda");
    
    // 2. Verificamos si está vacío (usando trim() para ignorar espacios en blanco)
    if (campo.value.trim() === "") {
        alert("Por favor escriba algo para buscar."); // Mensaje de alerta
        campo.focus(); // Coloca el cursor dentro del cuadro de texto
        return false; // Cancela el envío del formulario a buscar.php
    }
    
    return true; // Permite el envío POST a buscar.php si hay texto
}
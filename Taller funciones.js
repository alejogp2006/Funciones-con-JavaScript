function convertirVelocidad() {
    let kmh = parseFloat(document.getElementById('velocidad').value);
    let metrosHora = kmh * 1000;
    let millasHora = kmh * 0.621371;
    document.getElementById('resultadoVelocidad').innerText = 
        `Velocidad en metros/h: ${metrosHora.toFixed(2)} m/h, 
         Velocidad en millas/h: ${millasHora.toFixed(2)} mi/h`;
}

function calcularCostoLlamada() {
    let duracion = parseInt(document.getElementById('duracion').value);
    let costo = 200;
    if (duracion > 5) {
        costo += (duracion - 5) * 150;
    }
    document.getElementById('resultadoLlamada').innerText = 
       ` El costo de la llamada es: $${costo}`;
}

function convertirTemperatura() {
    let temp = parseFloat(document.getElementById('temperatura').value);
    let unidad = document.getElementById('unidadTemperatura').value;
    let celsius, fahrenheit;

    if (unidad === 'C') {
        celsius = temp;
        fahrenheit = (celsius * 9/5) + 32;
    } else {
        fahrenheit = temp;
        celsius = (fahrenheit - 32) * 5/9;
    }

    let mensaje = '';
    if (celsius <= 0 || fahrenheit <= 32) {
        mensaje = 'Nos congelamos';
    } else if ((celsius >= 5 && celsius <= 15) || (fahrenheit >= 37 && fahrenheit <= 50)) {
        mensaje = 'Está haciendo frío';
    } else if ((celsius >= 16 && celsius <= 25) || (fahrenheit >= 51 && fahrenheit <= 77)) {
        mensaje = 'Está templado el día';
    } else {
        mensaje = 'Tiene fiebre o es el apocalipsis';
    }

    document.getElementById('resultadoTemperatura').innerText = 
        `Temperatura en °C: ${celsius.toFixed(2)}°C, 
         Temperatura en °F: ${fahrenheit.toFixed(2)}°F. ${mensaje}`;
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);
    let mensaje = '';

    if (imc < 18.5) {
        mensaje = 'Bajo peso, debe ir al nutricionista';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        mensaje = 'Sobrepeso';
    } else {
        mensaje = 'Obeso, debe ir al nutricionista';
    }

    document.getElementById('resultadoIMC').innerText = 
        `Tu IMC es: ${imc.toFixed(2)}. ${mensaje}`;
}
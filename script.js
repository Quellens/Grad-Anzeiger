var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

function runde(num) {
    return Math.round(num * 100) / 100;
}

function celcius() {
    const cTemp = parseFloat(celciusInput.value)
    const fTemp = cTemp * (9 / 5) + 32;
    const kTemp = cTemp + 275.15;
    fahrenheitInput.value = runde(fTemp);
    kelvinInput.value = runde(kTemp);
}

function fahrenheit() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    celciusInput.value = runde(cTemp);
    kelvinInput.value = runde(kTemp);
}

function kelvin() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 275.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celciusInput.value = runde(cTemp);
    fahrenheitInput.value = runde(fTemp);
}

function inputEventlistener() {
    celciusInput.addEventListener("input", celcius);
    fahrenheitInput.addEventListener("input", fahrenheit);
    kelvinInput.addEventListener("input", kelvin);
}

inputEventlistener();
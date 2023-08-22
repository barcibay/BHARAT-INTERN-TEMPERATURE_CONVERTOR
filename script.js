function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value === "") {
        alert("Please enter a value in Celsius.");
        return;
    }

    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function convertFahrenheitToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (fahrenheitInput.value === "") {
        alert("Please enter a value in Fahrenheit.");
        return;
    }

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;

    celsiusInput.value = celsiusValue.toFixed(2);
}

function clearInputs() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    celsiusInput.value = "";
    fahrenheitInput.value = "";
}

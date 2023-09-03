function convertTemperature() {
    var select = document.getElementById("selectUnit");
    var input = document.getElementById("temperatureInput");
    var resultElement = document.getElementById("result");
    var inputValue = parseFloat(input.value);
    var selectedOption = select.value;

    if (!isNaN(inputValue)) {
        switch (selectedOption) {
            case "celToFere":
                resultElement.textContent = (inputValue * 9/5) + 32 + "°F";
                break;
            case "fereToCel":
                resultElement.textContent = (inputValue - 32) * 5/9 + "°C";
                break;
            case "celToKelvin":
                resultElement.textContent = inputValue + 273.15 + "K";
                break;
            case "kelvinToCel":
                resultElement.textContent = inputValue - 273.15 + "°C";
                break;
            case "fereToKelvin":
                resultElement.textContent = (inputValue - 32) * 5/9 + 273.15 + "K";
                break;
            case "kelvinToFere":
                resultElement.textContent = (inputValue - 273.15) * 9/5 + 32 + "°F";
                break;
            default:
                resultElement.textContent = "Invalid selection";
                break;
        }
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}
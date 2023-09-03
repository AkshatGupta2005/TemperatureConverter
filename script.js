function convertTemperature() {
    var select = document.getElementById("selectUnit");
    var input = document.getElementById("temperatureInput");
    var resultElement = document.getElementById("result");
    var inputValue = parseFloat(input.value);
    var selectedOption = select.value;

    if (!isNaN(inputValue) && input.value.length <= 7) {
        switch (selectedOption) {
            case "celToFere":
                resultElement.textContent = Math.round(((inputValue * 9/5) + 32)*1000)/1000 + " °F";
                break;
            case "fereToCel":
                resultElement.textContent = Math.round(((inputValue - 32) * 5/9)*1000)/1000 + " °C";
                break;
            case "celToKelvin":
                resultElement.textContent = Math.round((inputValue + 273.15)*1000)/1000 + " K";
                break;
            case "kelvinToCel":
                resultElement.textContent = Math.round((inputValue - 273.15)*1000)/1000 + " °C";
                break;
            case "fereToKelvin":
                resultElement.textContent = Math.round(((inputValue - 32) * 5/9 + 273.15)*1000)/1000 + " K";
                break;
            case "kelvinToFere":
                resultElement.textContent = Math.round(((inputValue - 273.15) * 9/5 + 32)*1000)/1000 + " °F";
                break;
            default:
                resultElement.textContent = "Invalid selection";
                break;
        }
    } else {
        resultElement.textContent = "Please enter a valid number with a maximum length of 7 characters.";
    }
}

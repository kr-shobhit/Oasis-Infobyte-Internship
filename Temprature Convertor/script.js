function conv() {
    const fromVal = parseFloat(document.getElementById('fromVal').value);
    const fromUnit = document.getElementById('fromChoose').value;
    const toUnit = document.getElementById('toChoose').value;

    // Check if input is a valid number
    if (isNaN(fromVal)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    let convertedVal;

    if (fromUnit === toUnit) {
        document.getElementById('result').innerText = 'Both units are the same.';
        return;
    }

    // Perform conversion
    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedVal = (fromVal * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedVal = fromVal + 273.15;
        } else {
            convertedVal = fromVal;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedVal = (fromVal - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedVal = (fromVal - 32) * 5/9 + 273.15;
        } else {
            convertedVal = fromVal;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedVal = fromVal - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedVal = (fromVal - 273.15) * 9/5 + 32;
        } else {
            convertedVal = fromVal;
        }
    }

    // Display result
    document.getElementById('result').innerText = `Converted Value: ${convertedVal.toFixed(2)} ° ${toUnit}`;
}


function res(){
    document.getElementById("fromVal").value = '';
    document.getElementById("result").innerHTML = '';
       
}
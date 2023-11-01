
const celsiusE1 =document.getElementById("celsius")
const fahrenheitE1 =document.getElementById("Fahrenheit")
const kelvinE1 =document.getElementById("Kelvin")

function calculateTemp(event){
    const temp=+event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinE1.value=(temp + 273.15).toFixed(2);
            fahrenheitE1.value=(temp*1.8+32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusE1.value=((temp-32)/1.8).toFixed(2);
            kelvinE1.value=((temp-32)/1.8+273.15).toFixed(2);
            break;
        case "kelvin":
            celsiusE1.value=(temp-273.15).toFixed(2);
            fahrenheitE1.value=((temp-273.15)*1.8+32).toFixed(2);  
            break;
        default:
            break;
    }
}

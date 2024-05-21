const Input = document.getElementById("Input");
const CF    = document.getElementById("CF");
const FC    = document.getElementById("FC");
const result = document.getElementById("result");
let temperature;
function convert(){
        if(CF.checked){
            temperature = Number(Input.value);
            temperature = temperature * 9 / 5 + 32;
            result.textContent = temperature.toFixed(1) + "°F";
        }
        else if(FC.checked){
            temperature = Number(Input.value);
            temperature = (temperature - 32)*(5/9);
            result.textContent = temperature.toFixed(1) + "°C";
        }
        else{
            result.textContent = "Select a unit";
        }
}
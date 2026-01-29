let latitudine = 45;
let logitudine = 9;
 
 
async function leggiTemperatura(){
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitudine + "&longitude=" + "&current=temperature_2m"
    let risposta = await fetch(url);
    let datoJson = await risposta.json()
    let temperature = datoJson.current.temperature_2m;
    console.log(temperatura);
    const temperaturaElemento = document.getElementById("temperatura");
    temperaturaElemento.textContent = "Temperatura: " + temperatura + " °C";
}
 
 
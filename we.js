async function getWeather() {
    var data
    const loc = document.getElementById("ser").value;
    console.log(loc)
    var cond ;



    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=' + loc + '&format=json&u=c';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'API KEY HERE',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        
        data = JSON.parse(result);
        cond = data.current_observation.condition.text;
        
    } catch (error) {
        console.error(error);
    }
    console.log(data)
    
    document.getElementById("city").innerText = data.location.city
    document.getElementById("temp").innerText = data.current_observation.condition.temperature + "°C"
    document.getElementById("hum").innerText = data.current_observation.atmosphere.humidity + "%"
    document.getElementById("wind").innerText = data.current_observation.wind.chill + "km/h"
    if(cond === "Foggy"){
        document.getElementById("condimg").src = "clouds.png"
    }
    else if(cond === "Fair"){
        document.getElementById("condimg").src = "clear.png"
    }
    else if(cond === "Sunny"){
        document.getElementById("condimg").src = "clear.png"
    }
    else if(cond === "Rain"){
        document.getElementById("condimg").src = "rain.png"
    }
    else if(cond === "Snow"){
        document.getElementById("condimg").src = "snow.png"
    }
}

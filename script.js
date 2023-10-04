



const getWeatherData =(city)=>{
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5d2f28501msh12be79dc9575569p12ae2fjsn0bbb6180d87f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    return fetch(url, options)
    .then(response =>response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

const seachresult = async() =>{
    const inputname = document.getElementById("inputname").value;
    const data = await getWeatherData(inputname)
    showWeatherData(data);
}
const showWeatherData = (weatherData) =>{
    console.log(weatherData.location)
    document.getElementById("cityname").innerHTML = weatherData.location.name;
    document.getElementById("condition").innerHTML = weatherData.current.condition.text
    document.getElementById("temp").innerHTML = weatherData.current.temp_c
    document.getElementById("region").innerHTML = weatherData.location.region
   document.getElementById("country").innerHTML = weatherData.location.country
}





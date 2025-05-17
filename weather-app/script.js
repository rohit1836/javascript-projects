
const apiKey = "fe002fc81046499eb36192103251705";

let URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=&aqi=yes`;

const getweather = document.getElementById("get-weather");
const input = document.querySelector('input');
const temp = document.querySelector("#temp")
const convertBtn = document.getElementById("convert")
const cityname = document.getElementById("city-name")
const humidity = document.getElementById("humidity")
const info = document.getElementById("info")

let toFahrenheit = true;
let tempC, tempF;

getweather.addEventListener('click', (event) => {
    const city = input.value;
    URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    
    const response = fetch(URL);
    response
    .then(data => data.json())
    .then(data => showWeather(data))
    .catch(data => showError());
    
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        event.preventDefault();
        getweather.click();
    }
})

convertBtn.addEventListener('click', event => {
    if(toFahrenheit){
        convertBtn.textContent = 'To Celsius';
        temp.textContent = 'Temperature: ' + tempF + ' F';
        toFahrenheit = false;
    } else {
        convertBtn.textContent = 'To Fahrenheit';
        temp.textContent = 'Temperature: ' + tempC + ' C';
        toFahrenheit = true;
    }
})

function showWeather(data){
    tempC = data.current.temp_c;
    tempF = data.current.temp_f;
    temp.textContent = 'Temperature: ' + tempC + ' C';
    cityname.textContent = 'City: ' + data.location.name;
    humidity.textContent = 'Humidity: ' + data.current.humidity;
    info.textContent = data.current.condition.text;
    convertBtn.textContent = 'To Fahrenheit';
    convertBtn.hidden = false;
}

function showError() {
    temp.textContent = 'Error occured fetching data... Try again!';
}

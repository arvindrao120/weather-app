let searchBtn = document.querySelector('.circle')
let locaton = document.querySelector('.location')
let temp = document.querySelector('.temp')
let windspeed = document.querySelector('.windspeed')
let humidity = document.querySelector('.humidity')
let searchInput = document.querySelector(".searchInput input")


let apiKey = "d901703db335236241de71c656ea2476";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    let response  = await fetch(apiUrl   + city +   `&appid=${apiKey}`)
    let data = await response.json();
    humidity.innerHTML =  data.main.humidity + " %";
    windspeed.innerHTML = data.wind.speed + " Km/h";
    temp.innerHTML = Math.round(data.main.temp) + " °C"
    locaton.innerHTML = data.name;


}
searchBtn.addEventListener("click",function(){
    checkWeather(searchInput.value);
    console.log("clicked");
})


 



const btn = document.querySelector(".btn");
const input = document.querySelector(".input-box");
const city = document.querySelector(".city");
const fullDate = document.querySelector(".date");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const uv = document.querySelector(".uv-index");
const london = document.querySelector(".london");
const amsterdam = document.querySelector(".amsterdam");
const paris = document.querySelector(".paris");
const rome = document.querySelector(".rome");
const cities = document.querySelector(".cities");
const forecastDate = document.querySelector(".forecast-date");
const forecastIcon = document.querySelector(".forecast-icon");
const forecastTemp = document.querySelector(".forecast-temp");
const forecastWind = document.querySelector(".forecast-wind");
const forecastHumidity = document.querySelector(".forecast-humidity");

btn.addEventListener("click", fetchSearch);

async function fetchSearch() {
  //used async function to fetch the data from the API
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=dbb45a93ce752788381a20675a5a9c02`
  );
  const data = await weatherResponse.json();

  console.log(data);
  const lon = data.coord.lon;
  const lat = data.coord.lat;
  oneCall(lon, lat);
  //displaying the classes on screen with innerHTML
  city.innerHTML = data.name;

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todaysDate = `${day}/${month}/${year}`;
  fullDate.innerHTML = todaysDate;

  const iconURL = document.createElement("img");
  icon.innerHTML = "";
  iconURL.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  console.log(iconURL);
  temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} mph`;
  icon.append(iconURL);
}

//async functions for the cities on the side list
cities.addEventListener("click", getCities);

async function getCities(e) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.className}&units=metric&appid=dbb45a93ce752788381a20675a5a9c02`
  );
  const data = await weatherResponse.json();

  city.innerHTML = data.name;

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todaysDate = `${day}/${month}/${year}`;
  fullDate.innerHTML = todaysDate;

  const iconURL = document.createElement("img");
  icon.innerHTML = "";
  iconURL.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );

  temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} mph`;
  icon.append(iconURL);
}

async function oneCall(lon, lat) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alert&appid=dbb45a93ce752788381a20675a5a9c02`
  );
  const data = await response.json();
  console.log(data);
  uv.innerHTML = `UV Index: ${data.current.uvi}`;
}

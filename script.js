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
const fDate1 = document.querySelector(".forecast-date1");
const fIcon1 = document.querySelector(".forecast-icon1");
const fTemp1 = document.querySelector(".forecast-temp1");
const fWind1 = document.querySelector(".forecast-wind1");
const fHumidity1 = document.querySelector(".forecast-humidity1");
const fDate2 = document.querySelector(".forecast-date2");
const fIcon2 = document.querySelector(".forecast-icon2");
const fTemp2 = document.querySelector(".forecast-temp2");
const fWind2 = document.querySelector(".forecast-wind2");
const fHumidity2 = document.querySelector(".forecast-humidity2");
const fDate3 = document.querySelector(".forecast-date3");
const fIcon3 = document.querySelector(".forecast-icon3");
const fTemp3 = document.querySelector(".forecast-temp3");
const fWind3 = document.querySelector(".forecast-wind3");
const fHumidity3 = document.querySelector(".forecast-humidity3");
const fDate4 = document.querySelector(".forecast-date4");
const fIcon4 = document.querySelector(".forecast-icon4");
const fTemp4 = document.querySelector(".forecast-temp4");
const fWind4 = document.querySelector(".forecast-wind4");
const fHumidity4 = document.querySelector(".forecast-humidity4");
const fDate5 = document.querySelector(".forecast-date5");
const fIcon5 = document.querySelector(".forecast-icon5");
const fTemp5 = document.querySelector(".forecast-temp5");
const fWind5 = document.querySelector(".forecast-wind5");
const fHumidity5 = document.querySelector(".forecast-humidity5");

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

  //covert the date to todays date and fetch the data
  let today = new Date().toLocaleDateString();
  fullDate.innerHTML = today;

  //just before you insert the img tag empty the one before
  icon.innerHTML = '';
  //use image tag to use the URL for the icon
  const iconURL = document.createElement("img");
  iconURL.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  icon.append(iconURL);

  //get temp, humidity and wind data from fetch
  temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} mph`;
}

//async functions for the cities on the side list
cities.addEventListener("click", getCities);

async function getCities(e) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.className}&units=metric&appid=dbb45a93ce752788381a20675a5a9c02`
  );
  const data = await weatherResponse.json();

  const lon = data.coord.lon;
  const lat = data.coord.lat;
  oneCall(lon, lat);

  city.innerHTML = data.name;

  let today = new Date().toLocaleDateString();
  fullDate.innerHTML = today;

  icon.innerHTML = '';
  const iconURL = document.createElement("img");
  iconURL.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  icon.append(iconURL);

  temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} mph`;
}

//
async function oneCall(lon, lat) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alert&units=metric&appid=dbb45a93ce752788381a20675a5a9c02`
  );
  const data = await response.json();
  console.log(data);
  uv.innerHTML = `UV Index: ${data.current.uvi}`;

  displayForecast(data) 
}

function displayForecast(data) {
  // box1 data fetch
  fDate1.innerHTML = data.daily[0].dt;
  let today = new Date().toLocaleDateString();
  fDate1.innerHTML = `Morning - ${today}`;

  fIcon1.innerHTML = '';
  const fIconURL1 = document.createElement("img");
  fIconURL1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}.png`
  );
  fIcon1.append(fIconURL1);

  fTemp1.innerHTML = `${Math.floor(data.daily[0].temp.morn)}°`;
  fHumidity1.innerHTML = `Humidity: ${data.daily[0].humidity}%`;
  fWind1.innerHTML = `Wind: ${data.daily[0].wind_speed} mph`;

  // box2 data fetch
  fDate2.innerHTML = data.daily[1].dt;
  fDate2.innerHTML = `Day - ${today}`;

  fIcon2.innerHTML = '';
  const fIconURL2 = document.createElement("img");
  fIconURL2.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`
  );
  fIcon2.append(fIconURL2);

  fTemp2.innerHTML = `${Math.floor(data.daily[1].temp.day)}°`;
  fHumidity2.innerHTML = `Humidity: ${data.daily[1].humidity}%`;
  fWind2.innerHTML = `Wind: ${data.daily[1].wind_speed} mph`;

  // box3 data fetch
  fDate3.innerHTML = data.daily[2].dt;
  fDate3.innerHTML = `Evening - ${today}`;

  fIcon3.innerHTML = '';
  const fIconURL3 = document.createElement("img");
  fIconURL3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`
  );
  fIcon3.append(fIconURL3);

  fTemp3.innerHTML = `${Math.floor(data.daily[2].temp.eve)}°`;
  fHumidity3.innerHTML = `Humidity: ${data.daily[2].humidity}%`;
  fWind3.innerHTML = `Wind: ${data.daily[2].wind_speed} mph`;
  
  // box4 data fetch
  fDate4.innerHTML = data.daily[3].dt;
  fDate4.innerHTML = `Night - ${today}`;

  fIcon4.innerHTML = '';
  const fIconURL4 = document.createElement("img");
  fIconURL4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`
  );
  fIcon4.append(fIconURL4);

  fTemp4.innerHTML = `${Math.floor(data.daily[3].temp.night)}°`;
  fHumidity4.innerHTML = `Humidity: ${data.daily[3].humidity}%`;
  fWind4.innerHTML = `Wind: ${data.daily[3].wind_speed} mph`;

  // box5 data fetch
  fDate5.innerHTML = data.daily[4].dt;
  fDate5.innerHTML = `Max/Min - ${today}`;

  fIcon5.innerHTML = '';
  const fIconURL5 = document.createElement("img");
  fIconURL5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png`
  );
  fIcon5.append(fIconURL5);

  fTemp5.innerHTML = `${Math.floor(data.daily[4].temp.max)}°/${Math.floor(data.daily[4].temp.min)}°`;
  fHumidity5.innerHTML = `Humidity: ${data.daily[4].humidity}%`;
  fWind5.innerHTML = `Wind: ${data.daily[4].wind_speed} mph`;
}

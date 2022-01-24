const btn = document.querySelector(".btn");
const input = document.querySelector(".input-box");
const city = document.querySelector(".city");
const fullDate = document.querySelector(".date");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const uv = document.querySelector(".uv-index");
const london = document.querySelector(".london");
const amsterdam = document.querySelector(".amsterdam");
const paris = document.querySelector(".paris");
const rome = document.querySelector(".rome");


btn.addEventListener("click", fetchSearch);

async function fetchSearch() {
  //used async function to fetch the data from the API
  const weatherResponse = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +input.value +
      "&appid=dbb45a93ce752788381a20675a5a9c02"
  );
  const data = await weatherResponse.json();
  console.log(data);

  //displaying the classes on screen with innerHTML
  city.innerHTML = data.name;

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todaysDate = `${day}/${month}/${year}`;
  fullDate.innerHTML = todaysDate;
  
  temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} mph`;
}

//async functions for the cities on the side list
london.addEventListener("click", getLondon);

async function getLondon() {
    const weatherResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=dbb45a93ce752788381a20675a5a9c02"
    );
    const data = await weatherResponse.json();
    console.log(data);
  
    city.innerHTML = data.name;
  
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let todaysDate = `${day}/${month}/${year}`;
    fullDate.innerHTML = todaysDate;
    
    temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind: ${data.wind.speed} mph`;
  }

  amsterdam.addEventListener("click", getAmsterdam);

async function getAmsterdam() {
    const weatherResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=dbb45a93ce752788381a20675a5a9c02"
    );
    const data = await weatherResponse.json();
    console.log(data);
  
    city.innerHTML = data.name;
  
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let todaysDate = `${day}/${month}/${year}`;
    fullDate.innerHTML = todaysDate;
    
    temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind: ${data.wind.speed} mph`;
  }

  paris.addEventListener("click", getParis);

async function getParis() {
    const weatherResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dbb45a93ce752788381a20675a5a9c02"
    );
    const data = await weatherResponse.json();
    console.log(data);
  
    city.innerHTML = data.name;
  
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let todaysDate = `${day}/${month}/${year}`;
    fullDate.innerHTML = todaysDate;
    
    temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind: ${data.wind.speed} mph`;
  }

  rome.addEventListener("click", getRome);

  async function getRome() {
      const weatherResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=rome&appid=dbb45a93ce752788381a20675a5a9c02"
      );
      const data = await weatherResponse.json();
      console.log(data);
    
      city.innerHTML = data.name;
    
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let todaysDate = `${day}/${month}/${year}`;
      fullDate.innerHTML = todaysDate;
      
      temperature.innerHTML = `${Math.floor(data.main.temp)}°`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
      wind.innerHTML = `Wind: ${data.wind.speed} mph`;
    }
const btn = document.querySelector(".btn");
const input = document.querySelector(".input-box");
const city = document.querySelector(".city");
const fullDate = document.querySelector(".date");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const uv = document.querySelector(".uv-index");

btn.addEventListener("click", fetchSearch);

async function fetchSearch() {
//fetching the data on the api using async function
  const weatherResponse = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=dbb45a93ce752788381a20675a5a9c02'
  );
  const data = await weatherResponse.json();
  console.log(data);


}

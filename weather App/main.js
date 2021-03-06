let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weather = fetch(Full_URL);
  return weather.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};

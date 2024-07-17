const apiKey = '8df7aea310c1957a8366c374a60359fd';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('cityInput');

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp} \xB0C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed}m/s`;
        document.getElementById('description').textContent = data.weather[0].description;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-container').textContent = 'Error fetching weather data.';
      });
  }

  searchButton.addEventListener('click', () => {
    //Event.defaultPrevented();
    const city = cityInput.value;
    fetchWeatherData(city);
  });
  function reset(){
    document.getElementById('cityInput').value = null;
    document.getElementById('city-name').textContent = null;
        document.getElementById('temperature').textContent = null;
        document.getElementById('humidity').textContent = null;
        document.getElementById('wind-speed').textContent = null;
        document.getElementById('description').textContent = null;
  }
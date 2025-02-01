const apiKey = '3b9e6207e7f8c200ca9f45176f6454d6'; // Замени на свой API-ключ
     const cityInput = document.getElementById('city-input');
     const searchBtn = document.getElementById('search-btn');
     const weatherInfo = document.getElementById('weather-info');

     searchBtn.addEventListener('click', () => {
         const city = cityInput.value;
         if (city) {
             getWeather(city);
         } else {
             alert('Введите город');
         }
     });

     async function getWeather(city) {
         try {
             const response = await fetch(
                 'https://api.openweathermap.org/data/2.5/weather?q=Лондон&appid=3b9e6207e7f8c200ca9f45176f6454d6&units=metric&lang=ru'
             );
             const data = await response.json();

             if (data.cod === 200) {
                 const weather = `
                     <p>Город: ${data.name}</p>
                     <p>Температура: ${data.main.temp}°C</p>
                     <p>Погода: ${data.weather[0].description}</p>
                     <p>Влажность: ${data.main.humidity}%</p>
                     <p>Ветер: ${data.wind.speed} м/с</p>
                 `;
                 weatherInfo.innerHTML = weather;
             } else {
                 weatherInfo.innerHTML = '<p>Город не найден</p>';
             }
         } catch (error) {
             console.error('Ошибка:', error);
         }
     }
// Retrieve search button and input
const search = document.querySelector("button");
const input = document.getElementById('city-data');

// Retrieve the content of the first <h1> element
const city = document.querySelector('h1');
console.log(city);

// Retrieve the content of the first <h2> element
const temperature = document.querySelector('h2');
console.log(temperature);

// Retrieve description
const description = document.querySelector(".description");
console.log(description);

// click on the button search 

search.addEventListener("click", async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`;

    try {
        const res = await axios.get(url);
        console.log('res', res);
        city.textContent = res.data.name;
        temperature.textContent = `${res.data.main.temp}°C`;
        description.textContent = res.data.weather[0].description; 
    } catch (error) {
        console.log('error', error);
    }
});

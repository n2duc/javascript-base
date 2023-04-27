const apiKey = "PRBXevHuZwetPCGDbGgYJ1oooVaEpITQ";
const cityForm = document.querySelector("form");
const cardWeather = document.querySelector('.card-weather')
const details = document.querySelector('.details')
const time = document.querySelector('.card-img')
const icon = document.querySelector('.icon-img')


const getWeather = async (id) => {
    const query = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${apiKey}`;
    const res = await fetch(query);
    const data = await res.json();
    return data[0];
};

const getCity = async (city) => {
    const query = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    const res = await fetch(query);
    const data = await res.json();
    return data[0];
};

const updateCity = async (city) => {
    const cityDetail = await getCity(city);
    const weather = await getWeather(cityDetail.Key);

    return { cityDetail, weather };
};

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //get City
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update
    updateCity(city)
        .then((data) => updateUI(data))
        .catch(err => console.log(err))
});

const updateUI = (data) => {
    // const cityDetail = data.cityDetail;
    // const weather = data.weather;

    // Destructuring
    const { cityDetail, weather } = data;
    console.log({cityDetail, weather})

    if (cardWeather.classList.contains('hidden')) {
        cardWeather.classList.remove('hidden');
    }

    details.innerHTML = `
        <h5 class="city-name">${cityDetail.EnglishName}</h5>
        <div class="condition">${weather.WeatherText}</div>
        <div class="temp">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    let timeSrc = weather.IsDayTime ? './img/day.svg' : './img/night.svg';
    time.setAttribute('src', timeSrc);

    let iconSrc = `./img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

}

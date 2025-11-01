const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const locButton = document.getElementById("get-location-button");


const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=815c6635901f4cad92b132630252810&q=${cityName}&aqi=yes`
    );

    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
})



// Current location fetching
async function getData(lat, long) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=815c6635901f4cad92b132630252810&q=${lat},${long}&aqi=yes`
    );

    return await promise.json();
}

async function getLocation(position) {
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
}

function failedToGet() {
    console.log('There was some issue');
}

locButton.addEventListener("click", async () => {
    const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
})


// https://api.weatherapi.com/v1/current.json?key=815c6635901f4cad92b132630252810&q=London&aqi=yes
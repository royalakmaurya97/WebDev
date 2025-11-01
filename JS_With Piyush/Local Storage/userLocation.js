const button = document.getElementById("get-location-button");

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
}

function failedToGet() {
    console.log('There was some issue');
}

button.addEventListener("click", async () => {
    const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
})
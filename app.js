
//Init ui
const ui = new UI();

//Init storage
const storage = new Storage();

// ----Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event listener
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  //---change location
  weather.changeLocation(city, country);

  //---set location in LS
  storage.setLocationData(city, country);

  //Get and display weather
  getWeather();

  //Close / Hide Modal (jQuery)
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

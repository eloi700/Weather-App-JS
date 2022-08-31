//Init weather object
const weather = new Weather("Hamburg, Germany");
//Init ui
const ui = new UI();

//Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

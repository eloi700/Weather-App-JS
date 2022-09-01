//Init weather object
const weather = new Weather("Hamburg", "Germany");
//Init ui
const ui = new UI();

//Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event listener
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation("Tokyo", "Japan");

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

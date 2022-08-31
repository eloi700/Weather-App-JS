class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.stringTemp = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
    }
    paint(data){
        this.location.textContent = `${data.name}, ${data.sys.country}`;
        this.desc.textContent = data.weather[0].description;
        this.stringTemp.textContent = `Average Temp: ${(data.main.temp - 273.15).toFixed(2)} °C`;
        this.icon.src = `icons/${data.weather[0].icon}.png`;
        this.humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${(data.main.feels_like- 273.15)} °C`
    }
}
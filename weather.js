/*--------FETCHING DATA IN WEATHER API--------*/
class Weather {
  constructor(cityName, country) {
    //properties
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
    this.apiKey = "905efaf2bfca647d0e795bd2a6ee5867";
    this.cityName = cityName;
    this.country = country;
  }


  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `${this.baseURL}${this.cityName}${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData; //main & weather
  }

  //Change Weather Location
  changeLocation(cityName, country){
    this.cityName = cityName;
    this.country = country;
  }
}

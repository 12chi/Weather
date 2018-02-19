import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city = 'Washington DC., US';
  apik = "&APPID=844350fa255eb4375f1f2fd79c0f9609"
  weatherURL = "http://api.openweathermap.org/data/2.5/weather?q="
  weatherInfo = {city: "", humidity: "", tempAve: "", tempHi: "", tempLo: "", status: ""}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    let url = this.weatherURL + this.city + "&units=imperial" + this.apik;
    let Obs = this._httpService.getWeather(url);
    Obs.subscribe(data => {
      // console.log('Got weather', data);
      this.weatherInfo.city = data['name'];
      this.weatherInfo.humidity = data['main']['humidity'];
      this.weatherInfo.tempAve = data['main']['temp'];
      this.weatherInfo.tempLo = data['main']['temp_min'];
      this.weatherInfo.tempHi = data['main']['temp_max'];
      this.weatherInfo.status = data['weather'][0]['description'];
      console.log("weatherInfo: ", this.weatherInfo)
    });
  }
}

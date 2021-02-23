import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {WeatherService} from "../../services/weather.service";

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
    loc$: Observable<string>;
    loc: string;
    currentWeather: any = <any>{};
    list: any[] = [];
    msg: string;

    constructor(
        private store: Store<any>,
        private weatherService: WeatherService
    ) {
        this.loc$ = store.pipe(select('loc'));
        this.loc$.subscribe(loc => {
            this.loc = loc;
            this.searchWeather(loc);
        })
    }

    ngOnInit() {
    }

    searchWeather(loc: string) {
        this.msg = '';
        this.currentWeather = {};
        this.weatherService.getCurrentWeather(loc)
            .subscribe(res => {
                this.currentWeather = res;
                this.list.push(this.currentWeather);
            }, err => {
                if (err.error && err.error.message) {
                    alert(err.error.message);
                    this.msg = err.error.message;
                    return;
                }
                alert('Failed to get weather.');
            }, () => {
            })
    }

    resultFound() {
        return Object.keys(this.currentWeather).length > 0;
    }

    getIcon(iconName) {
        return `http://openweathermap.org/img/w/${iconName}.png`
    }
}

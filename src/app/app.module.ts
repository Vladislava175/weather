import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from '../components/current-weather/current-weather.component';
import {HomePageComponent} from '../components/home-page/home-page.component';
import {WeatherService} from "../services/weather.service";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {locationReducer} from "../share/location-reducer";
import {StoreModule} from "@ngrx/store";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {TopBarComponent} from "../components/top-bar/top-bar.component";


const routes: Routes = [
    {path: 'current-weather', component: CurrentWeatherComponent},
    {path: 'home-page', component: HomePageComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        TopBarComponent,
        CurrentWeatherComponent,
    ],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        StoreModule.forRoot({
            loc: locationReducer
        }),
        RouterModule.forRoot(routes),
        FormsModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        HttpClientModule,
        MatDividerModule,
        MatListModule,
        ReactiveFormsModule
    ],
    providers: [
        WeatherService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {SET_LOCATION} from "../../share/location-reducer";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
    form: FormGroup;

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.init();
    }

    init() {
        this.form = new FormGroup({
            location: new FormControl('', [Validators.required])
        })
    }

    search() {
        this.store.dispatch({type: SET_LOCATION, payload: this.form.value.location});
    }
}

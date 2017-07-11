import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdSliderModule } from '@angular/material';
import { ExampleComponent } from './example.component';
import { NgxMaterialColorPickerModule } from '../index';


@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgxMaterialColorPickerModule,
        FormsModule,
        MdSliderModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }

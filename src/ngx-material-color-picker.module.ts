import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialColorPickerComponent } from './ngx-material-color-picker/ngx-material-color-picker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NgxMaterialColorPickerComponent
    ],
    exports: [
        NgxMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NgxMaterialColorPickerModule {
    static forRoot() {
        return {
            ngModule: NgxMaterialColorPickerModule,
            providers: []
        };
    }
}

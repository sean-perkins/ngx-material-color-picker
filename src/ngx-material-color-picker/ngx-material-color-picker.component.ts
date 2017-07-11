import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ngx-material-color-picker',
    styleUrls: ['./ngx-material-color-picker.component.scss'],
    templateUrl: './ngx-material-color-picker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxMaterialColorPickerComponent),
            multi: true
        }
    ]
})
export class NgxMaterialColorPickerComponent implements ControlValueAccessor, Validator {

    @Input() _color = 'blue';

    @Input() intensity = 500;

    colors = [
        'blue',
        'green',
        'red',
        'yellow',
        'orange',
        'pink',
        'purple',
        'indigo',
        'cyan',
        'teal',
        'lime',
        'amber',
        'brown',
        'deep-orange',
        'light-green',
        'light-blue',
        'deep-purple',
        'grey'
    ];

    get currentColor(): string {
        return this._color;
    }

    writeValue(value: any): void {
        this._color = value;
    }

    propagateChange = (_: any) => { };

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }

    setDisabledState(isDisabled: boolean): void { }

    selectColor(color: any) {
        this.writeValue(color);
        this.propagateChange(color);
    }

    validate(c: AbstractControl): ValidationErrors {
        return null;
    }

    registerOnValidatorChange(fn: () => void): void { }

    colorClass(color: string): string {
        return `mat-${color}-${this.intensity}`;
    }
}

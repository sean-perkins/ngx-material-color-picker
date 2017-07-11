
# ngx-material-color-picker

[![npm](https://img.shields.io/npm/v/ngx-material-color-picker.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-material-color-picker)
[![npm](https://img.shields.io/npm/dt/ngx-material-color-picker.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-material-color-picker)


Unique material color picker concept for Angular (ngx). Requires a dependency for flex-layouts and material themeing/colors. Uses reactive forms to create a custom form control.

![Example Image](https://media.giphy.com/media/xUA7bd6GSvFhzhiUWQ/giphy.gif)

1. `npm i ngx-material-color-picker --s`
2. Add `NgxMaterialColorPickerModule` to your feature module.
```
import { NgxMaterialColorPickerModule } from 'ngx-material-color-picker';

...
imports: [
    NgxMaterialColorPickerModule
]
...
```

## Usage

```html
<div [formGroup]="form">
    <ngx-material-color-picker formControlName="color" [intensity]="form.get('intensity').value"></ngx-material-color-picker>
    <md-slider max="900" min="100" step="100" tickInterval="100" formControlName="intensity"></md-slider>
</div>

```

```javascript
form: FormGroup;

constructor(private fb: FormBuilder) { }

ngOnInit() {
    this.form = this.fb.group({
        color: [''],
        intensity: [500]
    });
}
```

## Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|

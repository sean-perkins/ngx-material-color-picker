/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaterialColorPickerComponent } from './ngx-material-color-picker.component';

describe('NgxMaterialColorPickerComponent', () => {
    let component: NgxMaterialColorPickerComponent;
    let fixture: ComponentFixture<NgxMaterialColorPickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NgxMaterialColorPickerComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxMaterialColorPickerComponent);
        component = fixture.componentInstance;
    });

    it('should create the ngx-material-color-picker', () => {
        expect(component).toBeTruthy();
    });
});

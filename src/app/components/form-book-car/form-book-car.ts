import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { SelectComponent } from '../select/select';
import { DatePickerComponent } from '../date-picker/date-picker';

@Component({
  selector: 'app-form-book-car',
  imports: [ButtonComponent, SelectComponent, DatePickerComponent],
  templateUrl: './form-book-car.html',
  styleUrl: './form-book-car.less',
})
export class FormBookCarComponent {
  @Input() colorStyle: string = 'black';
  @Input() backgroundStyle: string = 'white';
}

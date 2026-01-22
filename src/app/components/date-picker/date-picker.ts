import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  imports: [ReactiveFormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.less',
})
export class DatePickerComponent {
  @Input() backgroundStyle: string = 'gray';

  @Input() control!: FormControl;
}

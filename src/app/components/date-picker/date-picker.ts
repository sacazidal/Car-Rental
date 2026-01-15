import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  imports: [],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.less',
})
export class DatePickerComponent {
  @Input() backgroundStyle: string = 'gray';
}

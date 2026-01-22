import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { DatePickerComponent } from '../date-picker/date-picker';
import { DropdownComponent } from '../dropdown/dropdown';
import { FormFactories } from '../../services/form-factories/form-factories';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderType } from '../../types/form-builder';
import { BookCar } from '../../interfaces/book-car';

@Component({
  selector: 'app-form-book-car',
  imports: [ButtonComponent, DatePickerComponent, DropdownComponent, ReactiveFormsModule],
  templateUrl: './form-book-car.html',
  styleUrl: './form-book-car.less',
})
export class FormBookCarComponent implements OnInit {
  @Input() colorStyle: string = 'black';
  @Input() backgroundStyle: string = 'white';

  form!: FormBuilderType<BookCar>;

  constructor(private _formFactories: FormFactories) {}

  ngOnInit(): void {
    this.form = this._formFactories.createBookCarForm();
  }

  onSubmit() {
    if (this.form.valid) {
      const payoad = this.form.getRawValue();
      console.log(payoad);
    } else {
      this.form.markAllAsTouched();
    }
  }
}

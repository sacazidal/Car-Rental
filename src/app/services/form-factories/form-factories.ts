import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBuilderType } from '../../types/form-builder';
import { BookCar } from '../../interfaces/book-car';

@Injectable({
  providedIn: 'root',
})
export class FormFactories {
  constructor(private _fb: FormBuilder) {}

  createBookCarForm(): FormBuilderType<BookCar> {
    return this._fb.nonNullable.group({
      car: ['', [Validators.required]],
      rental_place: ['', [Validators.required]],
      return_place: ['', [Validators.required]],
      rental_date: ['', [Validators.required]],
      return_date: ['', [Validators.required]],
    });
  }
}

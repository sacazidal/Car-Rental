import { FormBuilderType } from '../types/form-builder';

export interface BookCar {
  car: string;
  rental_place: string;
  return_place: string;
  rental_date: Date;
  return_date: Date;
}

export type BookCarForm = FormBuilderType<BookCar>;

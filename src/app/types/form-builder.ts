import { FormControl, FormGroup } from '@angular/forms';

export type FormBuilderType<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;

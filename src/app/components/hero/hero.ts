import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { FormBookCarComponent } from '../form-book-car/form-book-car';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, FormBookCarComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.less',
})
export class HeroComponent {}

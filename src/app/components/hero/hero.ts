import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { FormBookCarComponent } from '../form-book-car/form-book-car';
import { TitleComponent } from '../title/title';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, FormBookCarComponent, TitleComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.less',
})
export class HeroComponent {}

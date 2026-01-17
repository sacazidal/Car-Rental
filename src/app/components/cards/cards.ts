import { Component } from '@angular/core';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.less',
})
export class CardsComponent {}

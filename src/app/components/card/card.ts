import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ButtonComponent, CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.less',
})
export class CardComponent {}

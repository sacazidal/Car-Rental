import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../title/title';

@Component({
  selector: 'app-cars-preview',
  imports: [CardsComponent, RouterLink, TitleComponent],
  templateUrl: './cars-preview.html',
  styleUrl: './cars-preview.less',
})
export class CarsPreviewComponent {}

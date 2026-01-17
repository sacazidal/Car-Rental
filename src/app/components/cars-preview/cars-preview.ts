import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-preview',
  imports: [CardsComponent, RouterLink],
  templateUrl: './cars-preview.html',
  styleUrl: './cars-preview.less',
})
export class CarsPreviewComponent {}

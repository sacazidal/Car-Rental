import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AdvantageComponent } from '../../components/advantage/advantage';
import { InfoComponent } from '../../components/info/info';
import { CarsPreviewComponent } from '../../components/cars-preview/cars-preview';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AdvantageComponent, InfoComponent, CarsPreviewComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomePage {}

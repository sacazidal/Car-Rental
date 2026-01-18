import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AdvantageComponent } from '../../components/advantage/advantage';
import { InfoComponent } from '../../components/info/info';
import { CarsPreviewComponent } from '../../components/cars-preview/cars-preview';
import { FactsComponent } from '../../components/facts/facts';
import { CitySearchComponent } from '../../components/city-search/city-search';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AdvantageComponent,
    InfoComponent,
    CarsPreviewComponent,
    FactsComponent,
    CitySearchComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomePage {}

import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper';
import { TitleComponent } from '../title/title';

@Component({
  selector: 'app-city-search',
  imports: [SectionWrapperComponent, TitleComponent],
  templateUrl: './city-search.html',
  styleUrl: './city-search.less',
})
export class CitySearchComponent {}

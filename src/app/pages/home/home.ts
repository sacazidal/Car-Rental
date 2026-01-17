import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AdvantageComponent } from '../../components/advantage/advantage';
import { InfoComponent } from '../../components/info/info';
import { CardsComponent } from '../../components/cards/cards';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AdvantageComponent, InfoComponent, CardsComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomePage {}

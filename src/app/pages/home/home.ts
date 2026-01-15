import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AdvantageComponent } from '../../components/advantage/advantage';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AdvantageComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomePage {}

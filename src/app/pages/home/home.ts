import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class HomePage {}

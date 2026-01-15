import { advantages } from './../../lib/constants/advantage';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage',
  imports: [],
  templateUrl: './advantage.html',
  styleUrl: './advantage.less',
})
export class AdvantageComponent {
  advantages = advantages;
}

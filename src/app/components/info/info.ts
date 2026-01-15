import { Component } from '@angular/core';
import { infos } from '../../lib/constants/info';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.less',
})
export class InfoComponent {
  infos = infos;
}

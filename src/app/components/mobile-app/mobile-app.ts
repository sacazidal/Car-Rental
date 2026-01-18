import { Component } from '@angular/core';
import { TitleComponent } from '../title/title';

@Component({
  selector: 'app-mobile-app',
  imports: [TitleComponent],
  templateUrl: './mobile-app.html',
  styleUrl: './mobile-app.less',
})
export class MobileAppComponent {}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [NgClass],
  templateUrl: './title.html',
  styleUrl: './title.less',
})
export class TitleComponent {
  @Input() isMain: boolean = false;
  @Input() title!: string;
  @Input() colorStyle: 'black' | 'white' = 'black';

  get color(): string {
    switch (this.colorStyle) {
      case 'white':
        return 'title--white';
      default:
        return 'title--black';
    }
  }
}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.less',
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() text!: string;
  @Input() full!: boolean;
  @Input() backgroundStyle: string = 'orange';
  @Input() url: string = '/';
  @Input() isLink: boolean = false;

  constructor(private _router: Router) {}

  link(): void {
    if (this.isLink) {
      this._router.navigate([this.url]);
    }
  }
}

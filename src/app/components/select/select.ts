import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.less',
})
export class SelectComponent {
  @Input() backgroundStyle: string = 'gray';
  @Input() desc!: string;

  isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}

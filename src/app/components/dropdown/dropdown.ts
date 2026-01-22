import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { options } from '../../lib/constants/options';
import { Option } from '../../interfaces/options';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.less',
})
export class DropdownComponent {
  @Input() value: string = 'Select';
  @Input() items: Option[] = options;
  @Input() control!: FormControl;

  isOpen: boolean = false;

  constructor(private _el: ElementRef) {}

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  setValue(e: Event): void {
    const target = e.target as HTMLElement;

    if (target.classList.contains('dropdown__item')) {
      this.value = target.textContent?.trim() || '';

      const option = this.items.find((opt) => opt.name === this.value);
      if (option) {
        this.control.setValue(option.id);

        this.isOpen = false;
      }
    }
  }

  get availableOptions(): Option[] {
    return this.items.filter((option) => option.name !== this.value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentclick(e: Event) {
    if (this.isOpen && !this._el.nativeElement.contains(e.target)) {
      this.isOpen = false;
    }
  }
}

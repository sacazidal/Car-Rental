import { navbarItems } from './../../lib/constants/navbar';
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class HeaderComponent {
  navbarItems = navbarItems;

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

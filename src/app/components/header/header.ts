import { navbarItems } from './../../lib/constants/navbar';
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo';
import { FeedbackMethodComponent } from '../feedback-method/feedback-method';
import { feedbackMethods } from '../../lib/constants/feedback-method';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe, RouterLink, RouterLinkActive, LogoComponent, FeedbackMethodComponent],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class HeaderComponent {
  navbarItems = navbarItems;
  feedbackMethods = feedbackMethods;

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

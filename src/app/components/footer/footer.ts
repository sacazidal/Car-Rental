import { feedbackMethods } from './../../lib/constants/feedback-method';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo';
import { FeedbackMethodComponent } from '../feedback-method/feedback-method';
import { FeedbackMethod } from '../../interfaces/feedback-method';
import { SocialLink } from '../../interfaces/social-link';
import { socialLinks } from '../../lib/constants/social-link';
import { footerNavbarItems } from '../../lib/constants/navbar';
import { FooterNavbar } from '../../interfaces/navbar';
import { RouterLink } from '@angular/router';
import dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, FeedbackMethodComponent, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.less',
})
export class FooterComponent {
  feedbackMethods: FeedbackMethod[] = feedbackMethods;
  socialLinks: SocialLink[] = socialLinks;
  footerNavbarItems: FooterNavbar[] = footerNavbarItems;

  get year(): number {
    return dayjs().year();
  }

  get sliceFeedbackMethods(): FeedbackMethod[] {
    const arr = this.feedbackMethods.slice(0, 3);
    return arr;
  }
}

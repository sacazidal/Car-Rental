import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper';
import { TitleComponent } from '../title/title';
import { facts } from '../../lib/constants/banner';

@Component({
  selector: 'app-facts',
  imports: [SectionWrapperComponent, TitleComponent],
  templateUrl: './facts.html',
  styleUrl: './facts.less',
})
export class FactsComponent {
  facts = facts;
}

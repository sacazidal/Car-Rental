import { Component, Input } from '@angular/core';
import { FeedbackMethod } from '../../interfaces/feedback-method';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-feedback-method',
  imports: [NgClass],
  templateUrl: './feedback-method.html',
  styleUrl: './feedback-method.less',
})
export class FeedbackMethodComponent {
  @Input() method!: FeedbackMethod;
  @Input() wrapperStyle!: 'orange' | 'purple';
}

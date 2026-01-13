import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './logo.html',
  styleUrl: './logo.less',
})
export class LogoComponent {}

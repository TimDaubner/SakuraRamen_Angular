import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}

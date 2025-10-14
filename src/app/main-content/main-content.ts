import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OurMenu } from './our-menu/our-menu';

@Component({
  selector: 'app-main-content',
  standalone:true,
  imports: [LandingPageComponent,OurMenu],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}

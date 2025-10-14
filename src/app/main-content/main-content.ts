import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from "./how-to-order/how-to-order";

@Component({
  selector: 'app-main-content',
  standalone:true,
  imports: [LandingPageComponent, OurMenu, HowToOrder],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}

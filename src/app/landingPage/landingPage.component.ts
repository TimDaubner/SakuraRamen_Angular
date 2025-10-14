
import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [Navbar],
    template: `
    <section>
        <app-navbar></app-navbar>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent{

}


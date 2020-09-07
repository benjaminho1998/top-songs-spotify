import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-top';
  public isMed: boolean = false;
  public isSmall: boolean = false;
  public isMb: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 1390px)'
    ]).subscribe(result => {
      this.isMed = result.matches;
    });
    breakpointObserver.observe([
      '(max-width: 890px)'
    ]).subscribe(result => {
      this.isSmall = result.matches;
    });
    breakpointObserver.observe([
      '(max-width: 520px)'
    ]).subscribe(result => {
      this.isMb = result.matches;
    });
  }
}

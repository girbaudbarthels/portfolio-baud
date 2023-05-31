import { Component } from '@angular/core';
import { animate, spring } from "motion"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count: number = 0;

  verhoogTeller(): void {
    this.count++;
  }
  hoverTitle(): void {
    animate(".titleText", {
      y: -50,
      scale: 1.5
    }, { easing: spring() })
  }
  leaveTitle(): void {
    animate(".titleText", {
      y: 0,
      scale: 1
    }, { easing: spring() })
  }

  funStuff(): void {
    alert("Fun stufff")
  }
}

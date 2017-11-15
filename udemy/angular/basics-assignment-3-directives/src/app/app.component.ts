import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log = [];

  onShowSecret() {
    this.showSecret = !this.showSecret;
    const text = 'Button clicked (' + new Date() + ')';
    this.log.push(text);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  counter = 0;
  log = [];

  onShowSecret() {
    this.showSecret = !this.showSecret;
    ++this.counter;
    const text = 'Button clicked (' + this.counter + ')';
    this.log.push(text);
  }
}

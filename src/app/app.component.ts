import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leapYears';


  static leapYear(year: number): string {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    ? (year + ' is a leap year')
    : (year + ' is a common year');
    }
}

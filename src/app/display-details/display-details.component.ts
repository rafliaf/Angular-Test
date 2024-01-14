import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  showSecret = false;
  log: Array<any> = [];

  constructor() {}

  ngOnInit() {}

  onToggleDetails() {
    // Ketika button di click atau tidak
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

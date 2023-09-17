import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    const homeId = 'home'; // Ваш id, отриманий з елемента <section>
    this.sharedDataService.setActiveSectionId(homeId);
  }
}

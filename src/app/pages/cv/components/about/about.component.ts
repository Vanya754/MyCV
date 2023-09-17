import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    const aboutId = 'about'; // Ваш id, отриманий з елемента <section>
    this.sharedDataService.setActiveSectionId(aboutId);
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    const educationId = 'education'; // Ваш id, отриманий з елемента <section>
    this.sharedDataService.setActiveSectionId(educationId);
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    const projectsId = 'projects'; // Ваш id, отриманий з елемента <section>
    this.sharedDataService.setActiveSectionId(projectsId);
  }
}

import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Project } from '../_models/Project';
// import { CommonModule } from '@angular/common';
//import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})

export class ProjectModalComponent {
  project!: Project

  constructor(public bsModalRef: BsModalRef){
    
  }
  ngOnInit(): void {
    console.log('Project test modal:', this.project);
  }
}

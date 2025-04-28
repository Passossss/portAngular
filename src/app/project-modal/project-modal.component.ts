import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
//import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {


  constructor(public bsModalRef: BsModalRef){
    
  }
  
}

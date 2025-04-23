import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample1 App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  };
  project1: Project = {
    id: 1,
    name: 'Sample2 App',
    summary: 'Test2',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.CSHARP],
    pictures: []
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Gustavo Passos - Portfolio');
  }
}
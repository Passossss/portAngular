import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
      {
        id: 0,
        name: 'Sample1 App',
        summary: 'Test Description',
        description: 'A sample application built with Angular and TypeScript for demonstration purposes.',
        projectLink: 'https://sample1-app.example.com',
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
        pictures: []
      },
      {
        id: 1,
        name: 'Sample2 App',
        summary: 'Test2',
        description: 'Another sample application showcasing Angular and C# integration.',
        projectLink: 'https://sample2-app.example.com',
        tags: [Tag.ANGULAR, Tag.CSHARP],
        pictures: []
      },
      {id: 2, name: "Sample3 .Net App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.JAVA, Tag.ASPNET]},
      {id: 3, name: "Sample4 .Net App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.PYTHON]},
      {id: 4, name: "Sample5 .Net App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
      {id: 5, name: "Sample6 .Net App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]}
    ];

  constructor() { }

  GetProjects()
  {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);
  
    if (project === undefined) {
      throw new TypeError(`Este projeto nao foi encontrado o id: ${id}`);
    }
  
    return project;
  }
}

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
      name: 'EmprestimoBooks',
      summary: 'Sistema de empréstimo de livros em ASP.NET',
      description: 'Sistema completo com funcionalidades de login, cadastro, adição de livros, empréstimos e geração de relatórios em PDF utilizando .NET 8.0 e SQL Server.',
      projectLink: 'https://github.com/passossss/EmprestimoBooks',
      tags: [Tag.CSHARP, Tag.ASPNET, Tag.SQL],
      pictures: ["../../../assets/portBook.png", "../../../assets/portBook.png"]
    },
    {
      id: 1,
      name: 'Medicaly',
      summary: 'Aplicação para gestão médica',
      description: 'Aplicativo com foco em agendamentos, histórico de consultas e organização de dados médicos. Feito com Angular e backend em Node.js.',
      projectLink: 'https://github.com/passossss/medicaly.back',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODE],
      pictures: ["../../../assets/medicaly1.png", "../../../assets/medicaly2.png"]
    },
    { 
      id: 2,
      name: 'Clima Web App',
      summary: 'App de clima com consumo de API externa',
      description: 'Projeto feito com Vue.js que mostra a previsão do tempo usando uma API pública de clima.',
      projectLink: 'https://github.com/seuusuario/clima-app',
      tags: [Tag.VUE, Tag.JAVASCRIPT],
      pictures: ["../../../assets/clima1.png"]
    },
    {
      id: 3,
      name: 'Testes Automatizados Robot',
      summary: 'Repositório de testes automatizados com Robot Framework',
      description: 'Projeto de automação de testes com foco em QA, usando Robot Framework e Python.',
      projectLink: 'https://github.com/seuusuario/testes-automatizados-robot',
      tags: [Tag.PYTHON, Tag.ROBOT],
      pictures: ["../../../assets/robot1.png"]
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    const project = this.projects.find(p => p.id === id);
    if (!project) {
      throw new TypeError(`Projeto não encontrado para o id: ${id}`);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]): Project[] {
    return this.projects.filter(project =>
      filterTags.every(tag => project.tags.includes(tag))
    );
  }
}

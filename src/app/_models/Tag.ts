export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly CSHARP = new Tag('C#', 'green');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly NODE = new Tag('Node.JS', 'brown');
  static readonly ASPNET = new Tag('ASP.NET', 'purple');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
  static readonly REACT = new Tag('React', 'blue');
  static readonly VUE = new Tag('Vue.js', 'lightgreen');
  static readonly MYSQL = new Tag('MySQL', 'teal');
  static readonly SQL = new Tag('SQL Server', 'darkblue');
  static readonly HTML = new Tag('HTML', 'orangered');
  static readonly CSS = new Tag('CSS', 'deepskyblue');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'indigo');
  static readonly TAILWIND = new Tag('Tailwind CSS', 'aqua');
  static readonly GIT = new Tag('Git', 'black');
  static readonly GITHUB = new Tag('GitHub', 'gray');
  static readonly FIGMA = new Tag('Figma', 'hotpink');
  static readonly DOCKER = new Tag('Docker', 'lightblue');
  static readonly ROBOT = new Tag('Robot Framework', 'lightcoral');
  static readonly CYPRESS = new Tag('Cypress', 'darkgreen');
  static readonly TDD = new Tag('TDD', 'darkslategray');
  static readonly BDD = new Tag('BDD', 'slateblue');
  static readonly SCRUM = new Tag('Scrum', 'lightseagreen');
  static readonly KANBAN = new Tag('Kanban', 'mediumslateblue');

  private constructor(private readonly key: string, public readonly color: string) {}

  toString(): string {
    return this.key;
  }
}

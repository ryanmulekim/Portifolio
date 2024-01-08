import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './modules/port/pages/home/home.component';
import { KnowledgeComponent } from './modules/port/components/knowledge/knowledge.component';
import { HeaderComponent } from './modules/port/components/header/header.component';
import { ProjectsComponent } from './modules/port/components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, KnowledgeComponent, HeaderComponent, ProjectsComponent],
  template: '<router-outlet></router-outlet>',
  
})
export class AppComponent {
  title = 'projet';
}

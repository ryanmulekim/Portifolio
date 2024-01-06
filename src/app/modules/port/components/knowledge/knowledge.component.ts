import { Component, signal } from '@angular/core';
import { iknowledge } from '../../interface/iknowledge.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowLedge = signal<iknowledge[]>([
    {
      src: 'assets/icons/html.svg',
      alt: 'Icone de html',
    },
    {
      src: 'assets/icons/css.svg',
      alt: 'Icone de css',
    },
    {
      src: 'assets/icons/java.svg',
      alt: 'Icone de java',
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'Icone de angular',
    },  
    
  ])
}

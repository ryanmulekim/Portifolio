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
      src: 'assets/imgs/html5.svg',
      alt: 'Icone de html',
    },
    {
      src: 'assets/imgs/css3.svg',
      alt: 'Icone de css',
    },
    {
      src: 'assets/imgs/javascript.svg',
      alt: 'Icone de java',
    },
    {
      src: 'assets/imgs/angular1.svg',
      alt: 'Icone de angular',
    },  
    
  ])
}

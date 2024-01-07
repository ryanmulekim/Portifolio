import { Component, signal } from '@angular/core';
import { iexperiences } from '../../interface/iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<iexperiences[]>([
    {
      summary: {
        strong: "Front-end",
        p: " 11 do 11"
      },
      text: 'aspspsaa'

    },
    {
      summary: {
        strong: "Back-end",
        p: "0 do 12"
      },
      text: 'aspspsaa'

    },
  ])
}

import { Component, inject, signal } from '@angular/core';
import { iprojects } from '../../interface/iprojects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDdialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<iprojects[]>([
    {
      src:'./assets/imgs/vfull.png',
      alt: "",
      title: "NOME",
      width: '100px',
      height: '51px',
      description: '<p>Ainda em criação...</p>',
      links:[
        {
          name: 'conheça o blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])
  public openDiaLog(data: iprojects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}

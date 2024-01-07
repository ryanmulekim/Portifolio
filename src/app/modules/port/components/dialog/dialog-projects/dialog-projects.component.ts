import { Component, Inject, OnInit, signal } from '@angular/core';
import { iprojects } from '../../../interface/iprojects.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: iprojects
  ){}
  public getData = signal<iprojects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data )
  }
}

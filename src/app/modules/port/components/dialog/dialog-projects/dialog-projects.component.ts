import { Component, Inject, OnInit, signal } from '@angular/core';
import { iprojects } from '../../../interface/iprojects.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: iprojects
  ){}
  public getData = signal<iprojects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data )
  }
  public closeModal(){
    return this._dialogRef.close();
  }
}

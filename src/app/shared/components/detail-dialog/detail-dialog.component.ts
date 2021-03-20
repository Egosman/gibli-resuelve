import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Film } from '../../models/film.interface';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DetailDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public Data: Film) { }

  ngOnInit(): void {
  }

}

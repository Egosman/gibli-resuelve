import { DetailDialogComponent } from './../shared/components/detail-dialog/detail-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Film } from '../shared/models/film.interface';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchFilm: string;

  constructor(private filmServie: FilmsService, private dialog: MatDialog) { }

  
  controlFilms = new FormControl();
  films: Film[];

  filteredFilms: Observable<Film[]>;

  ngOnInit(): void {

    this.getListNames();
    this.getShowFilms();

  }

  getListNames(){

    this.filmServie.getFilms().subscribe((filteredFilms) => { 
      this.filteredFilms = this.controlFilms.valueChanges
         .pipe(
           startWith(''),
           map(value => typeof value === 'string' ? value : value.title),
           map(title => title ? this._filter(title) : filteredFilms.slice())
         );
    })
  }

  //Get data form Ghibli API
  getShowFilms() {
    this.filmServie.getFilms().subscribe( films =>{
      this.films = films;
    })
  }

  displayFn(film: Film): string {
    return film && film.title ? film.title : '';
  }

  private _filter(title: string): Film[] {
    const filterValue = title.toLowerCase();
    return this.films.filter(film => film.title.toLowerCase().indexOf(filterValue) === 0);
  }

  openDetailDialog():void{
      const dialogRef = this.dialog.open(DetailDialogComponent, {
        width: '550px',
        data: this.controlFilms.value
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        console.log('Close selection');
        this.controlFilms.setValue('');
      }
    });
  }

}

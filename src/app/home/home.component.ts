import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film.interface';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private filmServie: FilmsService) { }

  films: Film[];

  ngOnInit(): void {
    this.getShowFilms();

  }

  getShowFilms() {
    this.filmServie.getFilms().subscribe( films =>{
      this.films = films;
    })
  }

}

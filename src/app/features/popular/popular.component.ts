import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MovieDetails } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  popularMovies: MovieDetails[] = []
  constructor(private readonly moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().pipe(
      tap((movies: MovieDetails[]) => this.popularMovies = movies)
    ).subscribe();
  }
}

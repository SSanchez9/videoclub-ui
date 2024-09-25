import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ExtendedMovie } from 'src/app/models/extended-movie-details.model';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie!: ExtendedMovie;
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly moviesService: MoviesService) { }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params["id"];
    this.loadlMovieDetails(movieId).subscribe();
  }

  loadlMovieDetails(movieId: string) {
    return this.moviesService.getMovieDetails(movieId).pipe(
      tap((movie) => this.movie = movie)
    );
  }
}

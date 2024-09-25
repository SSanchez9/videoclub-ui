import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieDetails } from '../../models/movie.model';
import { ExtendedMovie } from '../../models/extended-movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_KEY = '014a3eaf10b049f8099057c70269734c'
  constructor(private readonly http: HttpClient) { }

  getPopularMovies(): Observable<MovieDetails[]> {
    return this.http.get<{ page: number, results: MovieDetails[], total_pages: number, total_results: number }>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=es-ES&page=1`).pipe(
      map((response: { page: number, results: MovieDetails[], total_pages: number, total_results: number }) => response.results)
    )
  }

  getMovieDetails(movieId: string): Observable<ExtendedMovie> {
    return this.http.get<ExtendedMovie>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.API_KEY}&language=es-ES'`);
  }
}

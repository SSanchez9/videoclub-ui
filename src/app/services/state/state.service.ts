import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesStateService {

  // Listado de peliculas que se muestran en la pantalla
  private moviesListSubject = new BehaviorSubject<any[]>([]);
  public moviesList$ = this.moviesListSubject.asObservable();

  // Estado para películas del carrito
  private cartSubject = new BehaviorSubject<any[]>([]);
  public cart$ = this.cartSubject.asObservable();

  // Estado para películas favoritas
  private favoritesListSubject = new BehaviorSubject<any[]>([]);
  public favoritesList$ = this.favoritesListSubject.asObservable();

  // Estado para la búsqueda
  private searchQuerySubject = new BehaviorSubject<string>('');
  public searchQuery$ = this.searchQuerySubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor() { }

  // Setear listado de peliculas
  setMoviesList(movies: any[]): void {
    this.moviesListSubject.next(movies);
  }

  // Añadir película al carrito
  addToCart(movie: any): void {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, movie]);
  }

  // Añadir película a la lista de favoritas
  addToFavorites(movie: any): void {
    const currentFavorites = this.favoritesListSubject.value;
    this.cartSubject.next([...currentFavorites, movie]);
  }

  // Actualizar la busqueda
  updateSearchQuery(query: string) {
    this.searchQuerySubject.next(query)
  }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading)
  }

}

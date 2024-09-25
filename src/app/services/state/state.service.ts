import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // Listado de peliculas que se muestran en la pantalla
  private moviesListSubject = new BehaviorSubject<any[]>([]);
  public moviesList$ = this.moviesListSubject.asObservable();

  // Estado para películas del carrito
  private cartSubject = new BehaviorSubject<any[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor() { }

  // Setear listado de peliculas
  setPopularMovies(movies: any[]): void {
    this.moviesListSubject.next(movies);
  }

  // Añadir película al carrito
  addToCart(movie: any): void {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, movie]);
  }

}

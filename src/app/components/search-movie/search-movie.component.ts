import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesStateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  searchForm!: FormGroup;

  // @Output() searchData: EventEmitter<any> = new EventEmitter();

  constructor(private readonly fb: FormBuilder, private readonly moviesState: MoviesStateService, private readonly router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      movieTitle: ['']  // Campo de búsqueda
    });
  }

  callSearch(term: string): void {
    if (term.length >= 3) {
    }
  }

  onSubmit() {
    const searchValue = this.searchForm.get('movieTitle')?.value;
    console.log('Buscando la pelicula...', searchValue);
    this.moviesState.updateSearchQuery(searchValue);
    this.searchForm.reset();
    this.router.navigate(['/search-results']);
  }

}

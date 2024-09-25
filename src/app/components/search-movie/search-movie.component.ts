import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  searchForm!: FormGroup;

  @Output() searchData: EventEmitter<any> = new EventEmitter();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      movieTitle: ['']  // Campo de búsqueda
    });
  }

  callSearch(term: string): void {
    if (term.length >= 3) {
      this.searchData.emit(term)
    }
  }

}

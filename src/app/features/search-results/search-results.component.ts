import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, Subscription, switchMap, take, takeUntil, tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { MoviesStateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();

  moviesSearchResults$!: Observable<any>;

  constructor(private readonly moviesState: MoviesStateService, private readonly moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesSearchResults$ = this.moviesState.searchQuery$.pipe(
      distinctUntilChanged(),
      switchMap((query: string) => this.moviesService.searchMoviesByQuery(query)),
      tap((result: any) => console.log('resultado de la busq1currencuueda', result)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}

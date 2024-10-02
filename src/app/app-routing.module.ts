import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './features/popular/popular.component';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';
import { SearchResultsComponent } from './features/search-results/search-results.component';

const routes: Routes = [
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: '',
    redirectTo: '/popular',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

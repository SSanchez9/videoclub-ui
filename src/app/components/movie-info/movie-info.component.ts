import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {

  @Input() data: any;


  constructor(private readonly router: Router) { }
  redirectTo(movieId: string): void {
    this.router.navigateByUrl(`movie/${movieId}`)
  }
}

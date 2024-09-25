import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toolbarOptions: { title: string, link: string }[] = [];

  ngOnInit(): void {
    this.toolbarOptions = [
      {
        title: 'Popular',
        link: '/popular'
      },
      {
        title: 'Favorites',
        link: ''
      }
    ]
  }
}

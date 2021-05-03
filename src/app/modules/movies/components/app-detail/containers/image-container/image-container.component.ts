import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent implements OnInit {
  @Input() image = '';
  baseUrl = 'https://image.tmdb.org/t/p/w500/';
  constructor() {}

  ngOnInit(): void {}
}

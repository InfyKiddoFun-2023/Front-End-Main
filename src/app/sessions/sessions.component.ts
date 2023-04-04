import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  videos = [
    {
      thumbnail: 'https://www.youtube-nocookie.com/embed/6znrAJbRAUY/30x20',
      title: 'Video 1',
      views: 1000
    },
    {
      thumbnail: 'https://www.youtube-nocookie.com/embed/6znrAJbRAUY/30x20',
      title: 'Video 2',
      views: 2000
    },
    {
      thumbnail: 'https://www.youtube-nocookie.com/embed/6znrAJbRAUY/30x20',
      title: 'Video 3',
      views: 3000
    },
    {
      thumbnail: 'https://via.placeholder.com/10x5',
      title: 'Video 4',
      views: 4000
    },
    {
      thumbnail: 'https://via.placeholder.com/10x5',
      title: 'Video 5',
      views: 5000
    },
    {
      thumbnail: 'https://via.placeholder.com/10x5',
      title: 'Video 6',
      views: 6000
    },
    {
      thumbnail: 'https://via.placeholder.com/10x5',
      title: 'Video 7',
      views: 7000
    },
    {
      thumbnail: 'https://via.placeholder.com/10x5',
      title: 'Video 8',
      views: 8000
    }]

  constructor() {}

  ngOnInit(): void {

  }
}

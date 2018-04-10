import { Component, OnInit } from '@angular/core';
import {Song} from './song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [
    new Song('teststring', 'Testsong', 'testartiest', 'testalbum'),
    new Song('1234567', 'Heb Je Even Voor Mij', 'Frans Bauer', 'Frans Bauer, De Grootste Hits'),
    new Song('1234567', 'Kali', 'Djagno Wagner', 'Djagno de vetklep'),
    new Song('1234567', 'Big Dick', 'Terror Teun', 'Big Dick'),
    new Song('teststring', 'Testsong', 'testartiest', 'testalbum'),
    new Song('1234567', 'Heb Je Even Voor Mij', 'Frans Bauer', 'Frans Bauer, De Grootste Hits'),
    new Song('1234567', 'Kali', 'Djagno Wagner', 'Djagno de vetklep')
  ];

  constructor() { }

  ngOnInit() {
  }

}

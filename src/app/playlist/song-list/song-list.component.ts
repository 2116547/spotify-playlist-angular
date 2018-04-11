import { Component, OnInit } from '@angular/core';
import {Song} from '../../shared/model/song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  // Dummy songs, moeten uit een playlist worden geladen

  constructor() { }

  ngOnInit() {
  }

  onSongDelete() {
    // Song verwijderen uit playlist, is gekoppeld aan de delete knop naas het liedje
  }

}

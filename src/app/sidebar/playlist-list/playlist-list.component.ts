import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../playlist/playlist.model';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  playlists: Playlist[] = [
    new Playlist('Playlist 1', 'Kutmuziek', '')
  ];

  constructor() { }

  ngOnInit() {
  }

}

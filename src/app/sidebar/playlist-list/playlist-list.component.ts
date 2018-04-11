import {Component, Input, OnInit} from '@angular/core';
import { Playlist } from '../../shared/model/playlist.model';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

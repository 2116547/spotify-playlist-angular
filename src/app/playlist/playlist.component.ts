import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  editPlaylist = false;

  constructor() { }

  ngOnInit() {
  }

  onEditPlaylist() {
    this.editPlaylist = true;
  }

  onChangeCancel() {
    this.editPlaylist = false;
  }

  onChangeSave() {
    this.editPlaylist = false;
  }

}

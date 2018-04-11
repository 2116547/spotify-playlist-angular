import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  // Boolean-property voor het weergeven of verbergen van de input velden en buttons
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
    // Verstuur de inputs van de change velden naar de database
  }

}

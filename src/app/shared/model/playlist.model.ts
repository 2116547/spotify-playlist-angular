import {Song} from './song.model';

export class Playlist {
  _id: number;
  playlistName:string;
  playlistGenre: string;
  playlistSongs: Song[];
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get _playlistName(): string {
    return this.playlistName;
  }

  set _playlistName(value: string){
    this.playlistName = value;
  }
  get _playlistGenre(): string {
    return this.playlistGenre;
  }

  set _playlistGenre(value: string){
    this.playlistGenre = value;
  }

  get _playlistSongs(): Song[] {
    return this.playlistSongs;
  }

  set _playlistSongs(value: Song[]) {
    this.playlistSongs = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

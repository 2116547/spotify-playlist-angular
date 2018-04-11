import {Song} from './song.model';
import {Playlist} from './playlist.model';
// Song array moet nog toegevoegd worden als songList[Song]
export class Playlist {
  _id: number;
  playlistName:string;
  playlistGenre: string;
  playlistSongs: Playlist[];

//   constructor(name: string, image: string, madeinyear: number, madeincountry: number,songs: Nummer[]) {
//   this.name = _name;
//   this._image = image;
//   this._madeinyear = madeinyear;
//   this._madeincountry = madeincountry;
//   this._songs = songs;
// }

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

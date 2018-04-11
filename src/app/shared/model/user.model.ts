import {Song} from './song.model';
import {}
// Song array moet nog toegevoegd worden als songList[Song]
export class Playlist {
  _id: number;
  userName:string;
  userPlaylists: Song[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get _userName(): string {
    return this.userName;
  }

  set _userName(value: string){
    this.userName = value;
  }

  get _userPlaylists(): Song[] {
    return this.userPlaylists;
  }

  set _userPlaylists(value: Song[]) {
    this.userPlaylists = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

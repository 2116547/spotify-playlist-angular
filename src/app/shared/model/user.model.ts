import {Playlist} from './playlist.model';

export class User {
  _id: number;
  userName:string;
  userPlaylists: Playlist[];

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

  get _userPlaylists(): Playlist[] {
    return this.userPlaylists;
  }

  set _userPlaylists(value: Playlist[]) {
    this.userPlaylists = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

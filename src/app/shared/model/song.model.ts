export class Song {
  _id: number;
  songId: string;
  songTitle: string;
  songArtist: string;
  songAlbum: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get _songId(): string {
    return this.songId;
  }

  set _songId(value: string) {
    this.songId = value;
  }

  get _songTitle(): string {
    return this.songTitle;
  }

  set _songArtist(value: number) {
    this.songArtist = value;
  }

  get _songAlbum(): string {
    return this.songAlbum;
  }

  set _songAlbum(value: string) {
    this.songAlbum = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './playlist/song-list/song-list.component';
import { SongItemComponent } from './playlist/song-list/song-item/song-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SongItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

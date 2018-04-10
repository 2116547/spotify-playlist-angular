import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './playlist/song-list/song-list.component';
import { SongItemComponent } from './playlist/song-list/song-item/song-item.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SongItemComponent,
    PlaylistListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

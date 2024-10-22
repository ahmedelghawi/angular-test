import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectFeaturedPlaylists, selectFeaturedPlaylistsName } from './state-management/playlist/playlist.selectors';
import { Playlist } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { FeaturedPlaylistsState } from './state-management/reducers/playlist.reducers';
import { getFeaturedPlaylists } from './state-management/playlist/playlist.actions';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AsyncPipe } from '@angular/common';
import { FilterPlaylistsComponent } from "./components/filter-playlists/filter-playlists.component";

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [PlaylistComponent, AsyncPipe, FilterPlaylistsComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss'
})
export class PlaylistsComponent implements OnInit {

  featuredPlaylistsName$!: Observable<string | undefined>;
  featuredPlaylists$!: Observable<Playlist[] | undefined>;

  constructor(private store: Store<FeaturedPlaylistsState>) {}

  ngOnInit(): void {
    select(selectFeaturedPlaylists);
    this.store.dispatch(getFeaturedPlaylists());
    this.featuredPlaylists$ = this.store.pipe(select(selectFeaturedPlaylists));
    this.featuredPlaylistsName$ = this.store.pipe(select(selectFeaturedPlaylistsName));
  }
}
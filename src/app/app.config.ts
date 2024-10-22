import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PlaylistEffects } from './components/playlists/state-management/playlist/playlist.effects';
import { featuredPlaylistsReducer } from './components/playlists/state-management/reducers/playlist.reducers';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { curatorNamesReducer } from './components/playlists/state-management/reducers/curator-names.reducer';
import { CuratorNamesEffects } from './components/playlists/state-management/curator-names/curator-names.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({featuredPlaylists: featuredPlaylistsReducer, curatorNames: curatorNamesReducer }),
    provideEffects([PlaylistEffects, CuratorNamesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(), provideAnimationsAsync()
  ]
};

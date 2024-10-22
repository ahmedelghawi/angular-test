import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeaturedPlaylistsState } from "../reducers/playlist.reducers";
import { CuratorNamesState } from "../reducers/curator-names.reducer";

export const selectFeaturedPlaylistsState = createFeatureSelector<FeaturedPlaylistsState>("featuredPlaylists");
export const selectCuratorNamesState = createFeatureSelector<CuratorNamesState>("curatorNames");

export const selectFeaturedPlaylistsName = createSelector(
    selectFeaturedPlaylistsState,
    (state: FeaturedPlaylistsState) => state.name
);

export const selectFeaturedPlaylists = createSelector(
    selectFeaturedPlaylistsState,
    (state: FeaturedPlaylistsState) => state.filteredPlaylists
);

export const selectCuratorNames = createSelector(
    selectCuratorNamesState,
    (state: CuratorNamesState) => state.curatorNames
  );
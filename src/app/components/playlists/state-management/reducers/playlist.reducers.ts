import { createReducer, on } from "@ngrx/store";
import { Playlist } from "../../../../interfaces/interfaces";
import { PlaylistActions } from "../playlist/action-types";

export interface FeaturedPlaylistsState {
    name: string | undefined;
    playlists: Playlist[] | undefined;
    filteredPlaylists: Playlist[] | undefined;
   
};

export const initialFeaturedPlaylistsState: FeaturedPlaylistsState = {
    name: undefined,
    playlists: undefined,
    filteredPlaylists: undefined
};



export const featuredPlaylistsReducer = createReducer(
    initialFeaturedPlaylistsState,
    on(PlaylistActions.gotAllFeaturedPlaylists, (state, action) => ({
        ...state,
        name: action.featuredPlaylists?.name,
        playlists: action.featuredPlaylists?.content,
        filteredPlaylists: action.featuredPlaylists?.content
    })),
    on(PlaylistActions.filterPlaylistsByCurator, (state, { curatorNames }) => ({
        ...state,
        filteredPlaylists: state.playlists?.filter(playlist => {
            return curatorNames.length > 0 ?
                curatorNames.includes(playlist.curator_name)
                : true;
        }) || []
    }))
);




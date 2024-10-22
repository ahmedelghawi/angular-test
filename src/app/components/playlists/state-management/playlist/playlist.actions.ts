import { createAction, props } from "@ngrx/store";
import { FeaturedPlaylists } from "../../../../interfaces/interfaces";


export const getFeaturedPlaylists = createAction(
    "[Featured Playlists Resolver] Get Featured Playlists",
);

export const gotAllFeaturedPlaylists = createAction(
    "[Get Featured Playlist Effect] Got all featured playlists",
    props<{featuredPlaylists: FeaturedPlaylists | null}>()
);

export const filterPlaylistsByCurator = createAction(
    '[Featured Playlists] Filter By Curator',
    props<{ curatorNames: string[] }>()
);
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PlaylistActions } from "./action-types";
import { concatMap, map } from "rxjs/operators";
import { PlaylistService } from "../../services/playlist/playlist.service";
import { gotAllFeaturedPlaylists } from "./playlist.actions";

@Injectable()
export class PlaylistEffects {

    getFeaturedPlaylists$ = createEffect(
        () => this.actions$.pipe(
            ofType(PlaylistActions.getFeaturedPlaylists),
            concatMap(() => this.playlistService.getPlaylists()),
            map(featuredPlaylists => {
                return gotAllFeaturedPlaylists({ featuredPlaylists });
            })
        )
    );

    constructor(private actions$: Actions, private playlistService: PlaylistService) {}
}
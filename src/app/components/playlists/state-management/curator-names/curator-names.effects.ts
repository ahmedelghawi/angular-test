import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { gotAllFeaturedPlaylists } from "../playlist/playlist.actions";
import { map } from "rxjs";
import { setCuratorNames } from "./curator-names.actions";

@Injectable()
export class CuratorNamesEffects {
    extractCuratorNames$ = createEffect(() =>
        this.actions$.pipe(
          ofType(gotAllFeaturedPlaylists),
          map(({ featuredPlaylists }) => {

            const curatorNames = featuredPlaylists ? 
                [...new Set(featuredPlaylists.content.map((playlist) => playlist.curator_name))]
                : [];

            return setCuratorNames({ curatorNames });
          })
        )
      );

    constructor(private actions$: Actions) {}
}
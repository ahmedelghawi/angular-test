import { createAction, props } from "@ngrx/store";

export const setCuratorNames = createAction(
    "[Set Curator Names Effect] Set curator names",
    props<{curatorNames: string[] | null}>()
);
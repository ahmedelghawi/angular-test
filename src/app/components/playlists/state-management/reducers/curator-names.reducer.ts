import { createReducer, on } from "@ngrx/store";
import { CuratorNamesActions } from "../curator-names/action-types";

export interface CuratorNamesState {
    curatorNames: string[] | null;
};

export const initialCuratorNamesState: CuratorNamesState = {
    curatorNames: null
};

export const curatorNamesReducer = createReducer(
    initialCuratorNamesState,
    on(CuratorNamesActions.setCuratorNames, (state, action) => ({
        ...state,
        curatorNames: action.curatorNames
    })),
);
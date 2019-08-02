import { 
    combineReducers, 
    ActionReducer,
    ActionReducerMap, 
    createSelector, 
    createFeatureSelector, 
    META_REDUCERS
} from '@ngrx/store';
import * as article from '../reducer/article';

import { compose } from '@ngrx/core';

export interface State {
    reddit: article.ArticleState,
}

export const reducers: ActionReducerMap<State> = {
    reddit: article.reducer,
}
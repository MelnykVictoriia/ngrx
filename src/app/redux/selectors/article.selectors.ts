import { createSelector } from '@ngrx/store';
import { State } from '../reducer/index';


export const getArticles = (state: State) =>  {
  return state.reddit.articles;
};
 
export const selectFeatureCount = createSelector(
  getArticles,
  (articles) => articles.sort((a , b) => a.title - b.title) /// add
);
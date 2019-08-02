import * as articles from '../actions/articles';
import * as constants from '../constants/article';
import { Article } from '../../classes/article';
import { IAction } from '../../interfaces/action';

export interface ArticleState {
    articles: Article[];
};
export const initialState : ArticleState = {
    articles: [],
};

export function reducer(state: ArticleState = initialState, action: IAction): ArticleState {
    switch (action.type) {
        case constants.ADD_ARTICLE: {
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload,
                ]
            }
        }
        case constants.DECREMENT_ARTICLE_POINT: {
            return {
              ...state,
              articles: [
                  ...state.articles.map((article: Article) => 
                  article.id == action.payload.id ? { 
                      ...article,
                      points: --action.payload.points,
                  } : { ...article }
                )
              ]
            }          
        }
        case constants.INCREMENT_ARTICLE_POINT: {
            return {
              ...state,
              articles: [
                  ...state.articles.map((article: Article) => 
                  article.id == action.payload.id ? { 
                      ...article,
                      points: ++action.payload.points,
                  } : { ...article }
                )
              ]
            }         
        }
        default: {
            return state;
        }
    }
};
import * as constants from '../constants/article';

export const addArticle = payload => ({
  type: constants.ADD_ARTICLE,
  payload,
});

export const incrementArticlePointAction = payload => ({
  type: constants.INCREMENT_ARTICLE_POINT,
  payload,
});

export const decrementArticlePointAction = payload => ({
  type: constants.DECREMENT_ARTICLE_POINT,
  payload,
});

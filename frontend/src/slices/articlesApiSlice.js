import { ARTICLES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => ({
        url: ARTICLES_URL
      }),
      keepUnusedDataFor: 5
    }),

    getArticleDetails: builder.query({
      query: articleId => ({
        url: `${ARTICLES_URL}/${articleId}`
      }),
      keepUnusedDataFor: 5
    })
  })
});

export const { useGetArticlesQuery, useGetArticleDetailsQuery } = articlesApiSlice;

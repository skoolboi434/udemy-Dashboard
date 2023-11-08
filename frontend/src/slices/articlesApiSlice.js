import { ARTICLES_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query({
      query: ({ pageNumber }) => ({
        url: ARTICLES_URL,
        params: { pageNumber }
      }),
      providesTags: ['Articles'],
      keepUnusedDataFor: 5
    }),

    getArticleDetails: builder.query({
      query: articleId => ({
        url: `${ARTICLES_URL}/${articleId}`
      }),
      keepUnusedDataFor: 5
    }),

    createArticle: builder.mutation({
      query: () => ({
        url: ARTICLES_URL,
        method: 'POST'
      }),
      invalidatesTags: ['Article']
    }),

    updateArticle: builder.mutation({
      query: data => ({
        url: `${ARTICLES_URL}/${data.articleId}`,
        method: 'PUT',
        body: data
      }),

      invalidatesTags: ['Articles']
    }),

    uploadArticleImage: builder.mutation({
      query: data => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data
      })
    }),

    deleteArticle: builder.mutation({
      query: articleId => ({
        url: `${ARTICLES_URL}/${articleId}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetArticlesQuery, useGetArticleDetailsQuery, useCreateArticleMutation, useUpdateArticleMutation, useUploadArticleImageMutation, useDeleteArticleMutation } = articlesApiSlice;

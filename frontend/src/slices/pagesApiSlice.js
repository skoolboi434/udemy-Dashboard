import { PAGES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const pagesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPages: builder.query({
      query: () => ({
        url: PAGES_URL
      }),
      providesTags: ['Pages'],
      keepUnusedDataFor: 5
    }),

    getPageDetails: builder.query({
      query: pageId => ({
        url: `${PAGES_URL}/${pageId}`
      }),
      keepUnusedDataFor: 5
    })
  })
});

export const { useGetPagesQuery, useGetPageDetailsQuery } = pagesApiSlice;

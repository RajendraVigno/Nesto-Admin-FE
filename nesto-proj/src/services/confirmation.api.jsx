import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const confirmationApi = createApi({
  reducerPath: 'confirmationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/getconfirmation' }),
  endpoints: (build) => ({
    getConfirmationDetails: build.query({
      query: () => "/",
    }),
  }),
})

export const { useGetConfirmationDetailsQuery } = confirmationApi
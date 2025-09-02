import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const landingApi = createApi({
  reducerPath: 'landingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/home' }),
  endpoints: (build) => ({
    getLandingData: build.query({
      query: () => "/",
    }),
  }),
})

export const {useGetLandingDataQuery} = landingApi
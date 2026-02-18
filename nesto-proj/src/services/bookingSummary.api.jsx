import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookingSummaryApi = createApi({
  reducerPath: 'bookingSummaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/bookingsummary' }),
  endpoints: (build) => ({
    getBookingDetails: build.query({
      query: () => "/",
    }),
  }),
})

export const { useGetBookingDetailsQuery } = bookingSummaryApi
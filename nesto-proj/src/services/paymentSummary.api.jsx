import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const paymentSummaryApi = createApi({
  reducerPath: 'paymentSummaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/paymentSummary' }),
  endpoints: (build) => ({
    getPaymentDetails: build.query({
      query: () => "/",
    }),
  }),
})

export const { useGetPaymentDetailsQuery } = paymentSummaryApi
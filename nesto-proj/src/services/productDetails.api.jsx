import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/getProductDetails' }),
  endpoints: (build) => ({
    getProductDetails: build.query({
      query: () => "/",
    })
  }),
})

export const { useGetProductDetailsQuery } = productDetailsApi
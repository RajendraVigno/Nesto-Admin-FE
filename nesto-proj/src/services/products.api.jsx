import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/getProducts' }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/",
    }),
    selectedProduct: build.mutation({
        query: ({productDetails})=> ({

        })
    })
  }),
})

export const { useGetProductsQuery, useSelectedProductMutation} = productsApi
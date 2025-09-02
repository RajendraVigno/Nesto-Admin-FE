import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/nesto/login' }),
  endpoints: (build) => ({
    getloginData: build.query({
      query: () => "/",
    }),
    userLoginDetails: build.mutation({
        query: ({userdetails})=> ({

        })
    })
  }),
})

export const {useGetloginDataQuery, useUserLoginDetailsMutation} = loginApi
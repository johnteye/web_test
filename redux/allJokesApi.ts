
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const allJokesApi = createApi({
  reducerPath: 'allJokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/joke/' }),
  endpoints: (builder) => ({
    getAllJokes: builder.query<any, void>({
      query: () => ({
        url  : "Any",
        method: "GET"
    })
    }),
  }),
})


export const {useGetAllJokesQuery } = allJokesApi;
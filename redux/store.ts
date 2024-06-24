'use client'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { allJokesApi } from '@/redux/allJokesApi'

export const store = configureStore({
  reducer: {
   
    [allJokesApi.reducerPath]: allJokesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allJokesApi.middleware),
})


setupListeners(store.dispatch)


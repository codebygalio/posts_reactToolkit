import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL2 }),
    tagTypes: ['Post'],
    endpoints: builder => ({})
})
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { landingApi } from '../services/landing.api'
import { loginApi } from '../services/login.api'
import { productsApi } from '../services/products.api'
import { productDetailsApi } from '../services/productDetails.api'
import { bookingSummaryApi } from '../services/bookingSummary.api'
import { paymentSummaryApi } from '../services/paymentSummary.api'
import { confirmationApi } from '../services/confirmation.api'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [landingApi.reducerPath]: landingApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    [bookingSummaryApi.reducerPath]: bookingSummaryApi.reducer,
    [paymentSummaryApi.reducerPath]: paymentSummaryApi.reducer,
    [confirmationApi.reducerPath]: confirmationApi.reducer
    
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(landingApi.middleware, 
                                  loginApi.middleware, 
                                  productsApi.middleware,
                                  productDetailsApi.middleware,
                                  bookingSummaryApi.middleware,
                                  paymentSummaryApi.middleware,
                                  confirmationApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
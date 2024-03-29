import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

// export const store = configureStore({
//     reducer: {
//         counter : counterSlice
//     },
// })

const rootReducer = combineReducers({
    counter : counterSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
import {configureStore} from '@reduxjs/toolkit';
import logger from "redux-logger";
import addFormReducer from './slices/addFormSlice';
import registerFormReducer from './slices/registerFormSlice';
import authFormReducer from './slices/authFormSlice';

const store = configureStore({
    reducer: {
        addForm: addFormReducer,
        registerForm: registerFormReducer,
        authForm: authFormReducer,

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

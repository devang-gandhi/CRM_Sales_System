import {configureStore} from '@reduxjs/toolkit'
import recordsReducer from './pages/record-listing/recordSlice'
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'

const store = configureStore({
    reducer:{
        records: recordsReducer,
        login : loginReducer,
        user: userReducer
    },
})

export default store;
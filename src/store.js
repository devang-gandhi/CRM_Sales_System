import {configureStore} from '@reduxjs/toolkit'
import recordsReducer from './pages/record-listing/recordSlice'
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'
import newRecordReducer from './components/addrecord-form/addRecordSlicer'

const store = configureStore({
    reducer:{
        records: recordsReducer,
        login : loginReducer,
        user: userReducer,
        openRecord: newRecordReducer,
    },
})

export default store;
import {configureStore} from '@reduxjs/toolkit'
import recordsReducer from './pages/record-listing/recordSlice'
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'
import newRecordReducer from './components/addrecord-form/addRecordSlicer'
import registrationReducer from './components/registration/registrationSlice'

const store = configureStore({
    reducer:{
        records: recordsReducer,
        login : loginReducer,
        user: userReducer,
        openRecord: newRecordReducer,
        registration: registrationReducer,
    },
})

export default store;
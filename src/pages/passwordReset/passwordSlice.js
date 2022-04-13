import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading:false,
    status: '',
    message:'',
    showOTPForm: true,
    email:'',
}
const passwordResetSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers:{
        OTPReqPending: (state)=>{
            state.isLoading= true;
        },
        OTPReqSuccess: (state, {payload})=>{
            state.isLoading= false;
            state.status = 'success';
            state.message = payload.message;
            state.showOTPForm = false;
            state.email = payload.email;
        },
        updatePasswordSuccess: (state, {payload})=>{
            state.isLoading= false;
            state.status = 'success';
            state.message = payload;
        },
        OTPReqFail: (state, {payload})=>{
            state.isLoading= false;
            state.status = 'error';
            state.message = payload;
        },
    }
})

const {reducer, actions} = passwordResetSlice;
export const {OTPReqPending, OTPReqSuccess, OTPReqFail, updatePasswordSuccess} = actions;

export default reducer
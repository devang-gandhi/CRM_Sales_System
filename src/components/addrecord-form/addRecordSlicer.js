import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: '', 
    successMsg: '',
}

const newRecordSlice = createSlice({
    name: 'newRecord',
    initialState,
    reducers:{
        openNewRecordPending: (state)=>{
            state.isLoading= true;
        },
        openNewRecordSuccess: (state, {payload})=>{
            state.isLoading= true;
            state.successMsg = payload;
        },
        openNewRecordFail: (state, {payload})=>{
            state.isLoading= true;
            state.error = payload;
        },
    },
});

export const {openNewRecordPending, openNewRecordSuccess, openNewRecordFail} = newRecordSlice.actions

export default newRecordSlice.reducer
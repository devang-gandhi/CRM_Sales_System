import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    records:[],
    isLoading: false,
    error:'',
    replyRecordError:'',
    replyMsg:'',
    searchRecordList:[],
    selectedRecord: {}
}
const recordListSlice = createSlice({
    name: 'recordList',
    initialState,
    reducers:{
        fetchRecordLoading: (state) =>{
            state.isLoading =  true;
        },
        fetchRecordSuccess: (state, action) =>{
            state.records = action.payload;
            state.searchRecordList= action.payload;
            state.isLoading = false;
        },
        fetchRecordFail: (state, {payload}) =>{
            state.isLoading = false;
            state.error =  payload;
        },  
        searchRecords: (state, {payload}) =>{
            state.searchRecordList = state.records.filter(row=>{
                if(!payload) return row;

                return row.customername.toLowerCase().includes(payload.toLowerCase());
            })
        },
        fetchSingleRecordLoading: (state) =>{
            state.isLoading =  true;
        },
        fetchSingleRecordSuccess: (state,{payload} ) =>{
            state.selectedRecord = payload;
            state.isLoading = false;
            state.error =  '';
        },
        fetchSingleRecordFail: (state, {payload}) =>{
            state.isLoading = false;
            state.error =  payload;
        },
        replyRecordLoading: (state) =>{
            state.isLoading =  true;
        },
        replyRecordSuccess: (state, {payload}) =>{
            state.isLoading = false;
            state.error =  '';
            state.replyMsg = payload;
        },
        replyRecordFail: (state, {payload}) =>{
            state.isLoading = false;
            state.replyRecordError =  payload;
        },
        closeRecordLoading: (state) =>{
            state.isLoading =  true;
        },
        closeRecordSuccess: (state, {payload}) =>{
            state.isLoading = false;
            state.error =  '';
            state.replyMsg = payload;
        },
        closeRecordFail: (state, {payload}) =>{
            state.isLoading = false;
            state.error =  payload;
        },
        resetMsg: (state) =>{
            state.isLoading = false;
            state.replyRecordError='';
            state.replyMsg='';
        },
    }
})

const {reducer, actions} = recordListSlice;
export const {fetchRecordLoading, fetchRecordSuccess, fetchRecordFail, searchRecords, fetchSingleRecordFail,fetchSingleRecordLoading,fetchSingleRecordSuccess, replyRecordFail, replyRecordLoading, replyRecordSuccess, closeRecordLoading, closeRecordSuccess, closeRecordFail, resetMsg} = actions

export default reducer
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    records:[],
    isLoading: false,
    error:'',
    searchRecordList:[]
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
        }
    }
})

const {reducer, actions} = recordListSlice;
export const {fetchRecordLoading, fetchRecordSuccess, fetchRecordFail, searchRecords} = actions

export default reducer
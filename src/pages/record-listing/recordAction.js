import {fetchRecordLoading, fetchRecordSuccess, fetchRecordFail ,searchRecords,fetchSingleRecordFail,fetchSingleRecordLoading,fetchSingleRecordSuccess, replyRecordFail, replyRecordLoading, replyRecordSuccess, closeRecordLoading, closeRecordSuccess, closeRecordFail} from './recordSlice';
import {getAllRecords, getSingleRecord, updateRecordStatusClose, updateReplyRecord} from '../../apis/recordApis';

export const fetchAllRecords = () => async(dispatch) =>{
    dispatch(fetchRecordLoading());

    try {
        const result = await getAllRecords();
        dispatch(fetchRecordSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchRecordFail(error.message));   
    }
};

export const filterRecords = str => dispatch =>{
    dispatch(searchRecords(str));
};

export const fetchSingleRecord = (_id) => async(dispatch) =>{
    dispatch(fetchSingleRecordLoading());

    try {
        const result = await getSingleRecord(_id);
        dispatch(fetchSingleRecordSuccess(result.data.result.length && result.data.result[0]));
    } catch (error) {
        dispatch(fetchSingleRecordFail(error.message));   
    }
};

export const replyOnRecord = (_id, msgObj) => async(dispatch) =>{
    dispatch(replyRecordLoading());

    try {
        const result = await updateReplyRecord(_id, msgObj);
        console.log(result);
        if(result.status === 'error'){
            return dispatch(replyRecordFail(result.message));
        }
        dispatch(fetchSingleRecord(_id));
        dispatch(replyRecordSuccess(result.message));
    } catch (error) {
        console.log(error.message);
        dispatch(replyRecordFail(error.message));   
    }
};

export const closeRecord = (_id) => async(dispatch) =>{
    dispatch(closeRecordLoading());

    try {
        const result = await updateRecordStatusClose(_id);
        console.log(result);
        if(result.status === 'error'){
            return dispatch(closeRecordFail(result.message));
        }
        dispatch(fetchSingleRecord(_id));
        dispatch(closeRecordSuccess(result.message));
    } catch (error) {
        console.log(error.message);
        dispatch(closeRecordFail(error.message));   
    }
};
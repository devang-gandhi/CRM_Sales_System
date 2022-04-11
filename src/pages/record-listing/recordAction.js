import {fetchRecordLoading, fetchRecordSuccess, fetchRecordFail ,searchRecords} from './recordSlice';
import {getAllRecords} from '../../apis/recordApis';

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
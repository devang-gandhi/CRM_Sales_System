import { createNewRecord } from "../../apis/recordApis";
import { openNewRecordFail, openNewRecordPending, openNewRecordSuccess } from "./addRecordSlicer";


export const openNewRecord = (frmdata) =>dispatch=>{
    return new Promise(async(resolve, reject)=>{
        try {
            dispatch(openNewRecordPending());
            const result = await createNewRecord(frmdata);

            if(result.status === 'error'){
                return dispatch(openNewRecordFail(result.message));
            }
            dispatch(openNewRecordSuccess(result.message));
        } catch (error) {
            console.log(error);
            dispatch(openNewRecordFail(error.message));
        }
    });
};
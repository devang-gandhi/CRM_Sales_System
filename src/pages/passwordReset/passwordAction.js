import { reqOTP, updateUserPassword } from '../../apis/passwordApis';
import {OTPReqPending, OTPReqSuccess, OTPReqFail, updatePasswordSuccess} from './passwordSlice';

export const sendResetOTP = email => async(dispatch) =>{
    try {
        dispatch(OTPReqPending());

        const {status, message} = await reqOTP(email);

        if(status === 'success'){
            return dispatch(OTPReqSuccess({message, email}));
        }

        return dispatch(OTPReqFail(message));

    } catch (error) {
        dispatch(OTPReqFail(error.message));
    }
};

export const updatePassword = frmdata => async(dispatch) =>{
    try {
        dispatch(OTPReqPending());

        const {status, message} = await updateUserPassword(frmdata);

        if(status === 'success'){
            return dispatch(updatePasswordSuccess(message));
        }

        return dispatch(OTPReqFail(message));

    } catch (error) {
        dispatch(OTPReqFail(error.message));
    }
};


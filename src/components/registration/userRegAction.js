import {registrationPending, registrationSuccess, registrationFail} from './registrationSlice';
import {userRegistration} from '../../apis/userApis'

export const newUserRegistration = (frmdata)=>async(dispatch)=>{
    
    try {
        dispatch(registrationPending());
        const result = await userRegistration(frmdata);

        result.status === 'success' 
        ? dispatch(registrationSuccess(result.message)) 
        : dispatch(registrationFail(result.message));
        console.log(result);
        
    } catch (error) {
        dispatch(registrationFail(error.message));
    }
    
}
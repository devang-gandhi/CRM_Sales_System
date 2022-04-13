import React, { useEffect, useState } from 'react'
import { Spinner,Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { userRegistrationVerification } from '../../apis/userApis';
import './verification.css'

const initialResponse={
  status: '',
  message: '',
}

export const Verification = () => {

  const {id, email} = useParams();
  const d = {id, email};

  const [response, setresponse] = useState(initialResponse);
 
  useEffect(()=>{
    const APICall= async() =>{
        const result=await userRegistrationVerification(d);
        setresponse(result);
        console.log(result);
    }
    !response.status && APICall();
  },[response])

  return (
    <div className='page bg-info'>
    <div className="mt-5">
        <div className="jumbotron"> 
          {!response.status && <Spinner variant='info' animation='border'/>}
          {response.status && <Alert variant={response.status === 'success' ? 'success' : 'danger'}>{response.message}</Alert>}
        </div>
    </div>
</div>
  )
}

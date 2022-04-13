import React from 'react'
import { useSelector } from 'react-redux'
import {ForgotPassword} from '../../components/forgot-password/forgot-password.comp'
import './passwordReset.css'
import Updatepassword from './updatePassword'

export const PasswordReset = () => {

  const {showOTPForm} = useSelector(state => state.password);

  return (
    <div>
      {showOTPForm ? <ForgotPassword/> : <Updatepassword/>}
    </div>
  )
}

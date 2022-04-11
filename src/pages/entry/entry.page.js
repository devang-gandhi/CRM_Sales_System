import React, {useState} from 'react'
import { LoginForm } from '../../components/login/login.comp'
import {ForgotPassword} from '../../components/forgot-password/forgot-password.comp'
import './entry.style.css'

export const Entry = () => {
  const [frm, setfrm] = useState('login')


  const frmswitch = frmtype => {
    setfrm(frmtype);
  }

  return (
    <div className='entry-page bg-info'>
        <div className="jumbotron">
          {frm === 'login' && <LoginForm  frmswitch={frmswitch}  />} 
          {frm === 'reset' && <ForgotPassword /*handleon={handleon}*/ /*submiton={submiton}*/ frmswitch={frmswitch} /*email={email}*/></ForgotPassword>}  
            
        </div>
    </div>
  )
}

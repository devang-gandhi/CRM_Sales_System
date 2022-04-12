import React from 'react'
import RegistrationForm from '../../components/registration/registration.comp'
import './registration.css'

export const Registration = () => {
  return (
    <div className='page bg-info'>
    <div className="mt-5">
        <div className="jumbotron"> 
            <RegistrationForm/>
        </div>
    </div>
</div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../pages/dashboard/userAction';
import { Footer } from './partials/footer'
import { Header } from './partials/header'

export const Defaultlayout = ({children}) => {
  const {isAuth} = useSelector((state)=>state.login);
  const {user} = useSelector((state)=> state.user);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
      if(isAuth === false){
        redirect('/');
      }
      !user._id && dispatch(getUserProfile()) 
  },[isAuth, user._id]);

  return (
    <div className='default-layout'>
      
      <header className="header mb-2">
        <Header/>
      </header>

      <main className="main-content">
        {children}
      </main> 

      <footer className="footer">
        <Footer/>
      </footer> 

    </div>
  );
};

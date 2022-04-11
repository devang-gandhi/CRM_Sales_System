import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer } from './partials/footer'
import { Header } from './partials/header'

export const Defaultlayout = ({children}) => {
  const {isAuth} = useSelector((state)=>state.login);
  const redirect = useNavigate();

  useEffect(()=>{
      if(!isAuth){
        redirect('/');
      } 
  },[isAuth]);

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

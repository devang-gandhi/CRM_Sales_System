import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Defaultlayout } from './layouts/defaultlayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry.page';
import { Addrecord } from './pages/new-record/addrecord.page';
import { Recordlist } from './pages/record-listing/recordlist.page';
import { Record } from './pages/record/record.page';
import { Registration } from './pages/registration/registration';
import { Verification } from './pages/verification/verification';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                <Route path='/' element={<Entry/>}exact/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/verification/:id/:email' element={<Verification/>}/>
                <Route path='/addrecord' element={<Defaultlayout><Addrecord/></Defaultlayout>} /> 
                <Route path='/recordlist' element={<Defaultlayout><Recordlist/></Defaultlayout>}/>
                <Route path='/record/:rId' element={<Defaultlayout><Record/></Defaultlayout>}/>      
                <Route path='/dashboard' element={<Defaultlayout><Dashboard/></Defaultlayout>}/>
        </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App;

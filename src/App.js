import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Defaultlayout } from './layouts/defaultlayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry.page';
import { Addrecord } from './pages/new-record/addrecord.page';
import { Recordlist } from './pages/record-listing/recordlist.page';
import { Record } from './pages/record/record.page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                <Route path='/addrecord' element={<Defaultlayout><Addrecord/></Defaultlayout>} /> 
                <Route path='/recordlist' element={<Defaultlayout><Recordlist/></Defaultlayout>}/>
                <Route path='/record/:rId' element={<Defaultlayout><Record/></Defaultlayout>}/>      
                <Route path='/dashboard' element={<Defaultlayout><Dashboard/></Defaultlayout>}/>
                <Route path='/' element={<Entry/>}exact/>
        </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App;

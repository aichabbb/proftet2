import im from './cert.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';



function Cer() {
  return (
   <div className='container' style={{marginBottom:'10%'}}>
    <div className='row' id='img_cer'>
        <div className='col-sm'>
             <img src={im} alt="Logo"  class="img-fluid"/>

        </div>
    </div>
   </div>
  );
}

export default Cer;

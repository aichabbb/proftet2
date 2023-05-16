import React, { Component} from 'react'
import img from './intro-bg.jpg'
import './index.css';

export class Prti1 extends Component {
  render() {
     
    return (
        <div>
        <div className="container-fuild"  style={{ height:'700px', backgroundImage: `url(${img})`,backgroundRepeat:'no-repeat'}}>
            <div style={{backgroundColor: 'rgb(0 0 0 / 65%)',height:'700px'}} >
            
            <div class="wr">
            <div class="wrapper">
                <div class="static-text"> JE SUIS DEVELOPEUSE</div>
                <ul class="dynamic-texts"><li><span>ODOO</span></li>
                    <li><span>PYTHON</span></li>
                    <li><span>FULL STACK</span></li>
                
                </ul>
            </div>
            </div>
                    
            
            
            

          
        </div>
      </div>
      </div>

      
    )
  }
}

export default Prti1

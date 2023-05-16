import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Skills() {
  return (

    <div className='container' style={{marginTop:'10%'}}>
        <div className='row' id='my_skills'> <div className='col'><div className='titre'>MY Skills </div> </div></div>
        <div className='row' style={{marginTop:'4%'}} >
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>HTML /CSS /Bootstrap</div>
            <div className='skill-bar'>
                <div className='skill-level1' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>Python</div>
            <div className='skill-bar'>
                <div className='skill-level2' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
        </div>
        <div className='row' style={{marginTop:'1%'}} >
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>JavaScript</div>
            <div className='skill-bar'>
                <div className='skill-level3' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>Odoo / Odoo.sh</div>
            <div className='skill-bar'>
                <div className='skill-level4' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
        </div>
        <div className='row' style={{marginTop:'1%'}} >
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>React Js</div>
            <div className='skill-bar'>
                <div className='skill-level5' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>Django</div>
            <div className='skill-bar'>
                <div className='skill-level6' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
        </div>
        <div className='row' style={{marginTop:'1%'}} >
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>Ajax / Json /Xml / Jquery</div>
            <div className='skill-bar'>
                <div className='skill-level7' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
            <div className='col-sm-6'> 
            <div className='skill'>
            <div className='skill-name'>PostgreSQL/ MySQL /Merise /Uml</div>
            <div className='skill-bar'>
                <div className='skill-level8' style={{width:'90%'}}></div>
            </div>
            </div>
            </div>
        </div>
    </div>
    
    
    
 

 




   
  );
}

export default Skills;

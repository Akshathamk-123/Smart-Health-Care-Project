//import "../css/style.css";

import React from 'react'
const About =()=>{
    return(
        <div>
        <div className="container emp-profile">
           <form method="">
            <div className="row" >
            <div className="col-md-6">
                <img src="https://thumbs.dreamstime.com/b/family-health-care-insurance-concept-family-health-care-insurance-concept-stethoscope-paper-cut-family-102883760.jpg" alt="about_us" style={{height:"100%",width:"100%"}} />
            </div>
            <div className="col-md-6">
            <div className='col-md-6'>
                <h3 style={{textAlign:"center",fontSize:"1.40em",fontFamily:"fantasy",color:"black"}}>Smart Health care Website</h3>
                
                <p className="porfile-rating mt-4 mb-5" style={{textAlign:"center",fontFamily:"serif",fontSize:"1.25em",color:"black"}}>It is important to take care of the patient, to be followed by the doctor, 
            but it is a time of great pain and suffering when doctor is not present at that time..
            so our website will help u finding the doctors and talk to doctor from ur home only and it is a friendly website 
            where u book an appointment at which ever time u want ..</p>
    
            </div>
            </div>
            </div>
            </form>  
        </div>
        
        </div>
    )
}
export default About
// import image from "../img/hero1.jpg";
import "../css/style.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
export default function Home(){

    const navigate = useNavigate();
        const navigateToContacts = () => {

            navigate('/appointment');
          };
    
    return (
        <header className="App-header"> 
            <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
            <div class="row justify-content-start">
                <div class="col-lg-8 text-center text-lg-start">
                    <h1 class="display-1 text-white mb-md-4">Best Healthcare Solution</h1>
                    <div class="pt-2">
                        <a href="http://localhost:8081/" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" >Find Doctor</a>
                        <a href="" class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2" style={{color:"black"}} onClick={navigateToContacts}>Book an Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </header>
    );
}

//export default Home;

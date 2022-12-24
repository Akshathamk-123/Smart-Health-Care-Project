
import { useState } from 'react'; 
//import axios from 'axios';
//import {useDispatch} from 'react-redux';
//import fetch from 'node-fetch';
//import {Routes, Route, useNavigate} from 'react-router-dom';
import "../css/style.css";
export default function Form() {

	/*const navigate = useNavigate();
	const navigateToHome = () => {
		
		navigate('/home');
	  };*/

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	
	}
	
};





// Showing success message
const successMessage = () => {

	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}} >
		<h6>{name} successfully registered</h6>
		
	</div>
	);
};


// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h6>Please enter all the fields</h6>
	</div>
	);
};


/*fetch("http://localhost:9000/Smart_Health_db",{
	method:"POST",
	headers:{
		"Contents-type":"application/json"
	},
	body:JSON.stringify([
		name={name},
		email={email},
		password={password}
	]),
}).then(fetch("http://localhost:9001",{
	method:"GET",
	headers:{"Content-type":"application/json"}
}));*/



return (
	<div className="app">
		<div className='allbackground' >
	<div className='login-form ' style={{height:"65%", width:"30%", align:"center",marginLeft:"35%",marginTop:"10rem"}}>
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<div className="input-container">
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />
		</div>
		<div className="input-container">
		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />
		</div>

		<div className="input-container">
		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />
		</div>

		<div className="button-container">
		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
		
		</div>
	</form>
	</div>
	</div>
	</div>


	
  );
}




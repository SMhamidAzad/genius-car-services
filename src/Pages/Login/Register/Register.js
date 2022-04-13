import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate()

    const navigateLogin= event =>{
        navigate("/login")
    }
    if(user){
        navigate("/")
    }
    const handleRegister = (event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form mx-auto mt-5'>
            <h2 className='text-center text-primary'>Please Register Here:</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name:'/>
                <input type="email" name="email" id="" placeholder='Enter Email:' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <span style={{cursor: 'pointer'}} onClick={navigateLogin} className='text-danger fw-bold'>Please Login</span></p>
        </div>
    );
};

export default Register;
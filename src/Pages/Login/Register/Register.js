import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin= event =>{
        navigate("/login")
    }
    return (
        <div className='register-form mx-auto mt-5'>
            <h2 className='text-center text-primary'>Please Register Here:</h2>
            <form>
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
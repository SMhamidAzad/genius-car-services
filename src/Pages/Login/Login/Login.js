import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {   
        errorElement=<div>
          <p className='text-danger'>Error: {error?.message}</p>
        </div>
      
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password)
        console.log(email,password);
    }
    const navigateRegister= event =>{
        navigate("/register")
    }
   
    return (
        <div className='mx-auto w-50'>
            <h2 className='text-primary text-center mt-3'>Please Login Here:</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <span style={{cursor: 'pointer'}} onClick={navigateRegister} className='text-danger fw-bold'>Please Register</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
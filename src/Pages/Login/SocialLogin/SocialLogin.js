import React from 'react';
import google from '../../../images/social/Google.png'
import fb from '../../../images/social/Facebook.png'
import github from '../../../images/social/GitHub.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
  if (error || error1) {   
      errorElement=<div>
        <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      </div>
    
  }
  if(user || user1){
      navigate("/home")
  }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ borderTop: '2.3px solid gray', opacity: '0.5' }} className=' w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ borderTop: '2.3px solid gray', opacity: '0.5' }} className=' w-50'></div>
            </div>
            {errorElement}

            <div>
                <button 
                 onClick={()=>signInWithGoogle()}
                className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={fb} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button 
                onClick={()=>signInWithGithub()}
                className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
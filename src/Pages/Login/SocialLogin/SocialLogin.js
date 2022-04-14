import React from 'react';
import google from '../../../images/social/Google.png'
import fb from '../../../images/social/Facebook.png'
import github from '../../../images/social/GitHub.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ borderTop: '2.3px solid gray', opacity: '0.5' }} className=' w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ borderTop: '2.3px solid gray', opacity: '0.5' }} className=' w-50'></div>
            </div>
            <div>
                <button className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={fb} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
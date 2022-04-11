import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 bg-black p-3'>
            <p className='text-white mt-1'><small>Syed Md. Abdul Hamid, Copyright &copy; {new Date().getUTCFullYear()}</small></p>
        </footer>
    );
};

export default Footer;
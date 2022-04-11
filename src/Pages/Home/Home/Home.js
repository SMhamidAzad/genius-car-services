import React from 'react';
import Services from '../Services/Services';
import repair1 from './../../../images/repair-1.png'

const Home = () => {
    const services = [
        { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/XpPJxSG/erik-mclean-3u-Hl-GFnz-PDU-unsplash-1.png'},
        { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/XpPJxSG/erik-mclean-3u-Hl-GFnz-PDU-unsplash-1.png'}
    ]
    return (
        <div>
           <Services></Services>
        </div>
    );
};

export default Home;
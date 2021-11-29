import React from 'react';
import HeroSection from '../../Header/HeroSection/HeroSection';
import Packages from '../Packages/Packages';
import Reviews from './Reviews';
import ThirdSection from './ThirdSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <h1 className='my-3'>Our <span className="text-danger">Deals</span></h1>
            <Packages></Packages>
            <ThirdSection></ThirdSection>
            <h1 className='my-3'>Clients <span className="text-danger">Reviews</span> </h1>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
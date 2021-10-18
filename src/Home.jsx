import React from 'react'
import { NavLink } from 'react-router-dom';
import rocket from '../src/assets/Rocket-Man.svg'
import Common from './Common';
const Home = () => {
    return(
        <>
            <Common name='Grow Your Business Using' buttonText='Get Started' route='/service' img={rocket}/>
        </>
    );
}

export default Home;
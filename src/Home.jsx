import React from 'react'
import { NavLink } from 'react-router-dom';

import HomeSvg from '../src/images/Home.svg';
import Common from './Common';
import Footer from './Footer';

const Home = () => {
    return (
        <>
             <Common name="Get all information science & Computer science  engineering related  notes " imgsrc={HomeSvg} visitLink="/subject" btn_name="Subjects" />

            
           
        </>
    )
}

export default Home;

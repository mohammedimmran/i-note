import React from 'react'
import { NavLink } from 'react-router-dom';

import AboutSvg from '../src/images/About.svg';
import Common from './Common';

const About = () => {
    return (
        <>
            
            <Common name=" We provide all the  notes related to the  CS/IS subjects   " imgsrc={AboutSvg} visitLink="/contact" btn_name="Contact" />
</>
    )
}

export default About;

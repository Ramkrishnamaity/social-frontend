// eslint-disable-next-line no-unused-vars
import React from 'react';
import AboutSocial from '../../../Component/About/AboutSocial';
import AboutMission from '../../../Component/About/AboutMission';
import AboutTeam from '../../../Component/About/AboutTeam';

import "./About.css"

interface AuxProps {
    
}

const AboutFont: React.FC<AuxProps> = () => {

    
    return (
        <>
          
            <AboutSocial/>

        
            <AboutMission/>

          
            <AboutTeam/>
        </>

    )
}
export default AboutFont

import React from 'react';
import '../index.css';
import HomeLayout from '../layout/LandingLayout.jsx';
import LandingContent from '../component/landingContent.jsx';
function Landing(){
    return(
        <HomeLayout>
            <LandingContent />
        </HomeLayout>
    )
}
export default Landing
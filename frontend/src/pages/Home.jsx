import React from 'react';
import '../index.css';
import HomeLayout from '../layout/HomeLayout.jsx';
import HomeContent from '../component/HomeContent.jsx';
function Home(){
    return(
        <HomeLayout>
            <HomeContent />
        </HomeLayout>
    )
}
export default Home
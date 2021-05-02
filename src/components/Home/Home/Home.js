import React from 'react';
import FindMe from '../FindMe/FindMe';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div >
        {/* <div style={{margin:'0'}}> */}
            <Header></Header>
            <Skills></Skills>
            <Projects></Projects>
            <FindMe></FindMe>
            
        </div>
    );
};

export default Home;
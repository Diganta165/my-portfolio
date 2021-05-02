import React from 'react';
import SkillCard from '../SkillCard/SkillCard';

const mySkills=[
    {
        imgUrl:"https://i.ibb.co/zH1mH4n/C-Logo-svg.png",
        name: 'C++'

    },
    {
        imgUrl:'https://i.ibb.co/jHbN6SW/Python.png',
        name: 'Python'  

    },
    {
        imgUrl:'https://i.ibb.co/6D1m9c9/Java-Script.jpg',
        name: 'JavaScript'
    },
    {
        imgUrl:'https://i.ibb.co/3MGPMdf/HTML.png',
        name: 'HTML'
    },
    {
        imgUrl:'https://i.ibb.co/ts3wNwF/CSS.png',
        name: 'CSS'
    },
    {
        imgUrl:'https://i.ibb.co/4Jk812n/React.png',
        name: 'React'
    },
    {
        imgUrl:'https://i.ibb.co/GRdNSNc/Bootstrap.png',
        name: 'Bootstrap'
    },
    {
        imgUrl:'https://i.ibb.co/r2TndRR/MongoDB.png',
        name: 'MongoDB'
    },
    {
        imgUrl:'https://i.ibb.co/KN5V82p/Firebase.jpg',
        name: 'Firebase'
    },
    {
        imgUrl:'https://i.ibb.co/SRVyYr0/Git.png',
        name: 'Git'
    }
    
]

const Skills = () => {
    return (
        <div className="container" >
            <div className="row pt-5">
                <div className="col-md-12 text-center mb-5">
                    <h2>My <span>Skill Set</span></h2>
                    
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            mySkills.map(mySkill => <SkillCard mySkill={mySkill}></SkillCard>)
                        }
                    </div>
                </div>
                {/* <div className="row text-center">
                    <div className="col-lg-10 col-lg-offset-1">
                        {
                            mySkills.map(mySkill => <SkillCard mySkill={mySkill}></SkillCard>)
                        }
                    </div>
                </div> */}
            </div>
            
        </div>
    );
};

export default Skills;
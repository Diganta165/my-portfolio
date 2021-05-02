import React from 'react';
import './SkillCard.css'

const SkillCard = (props) => {
    const { imgUrl, name } = props.mySkill;
    return (
        // <div className="col-md-4 service-skill">
        //     <span>{imgUrl}</span>
        //     <p>{name}</p>
        // </div>
            
        // <div class=" row-cols-1 row-cols-md-3 g-4">
        // <div class="col">
        //   <div class="card h-70 align-items-center">
        //     <img src={imgUrl} class="card-img-top skill-logo" alt="..."/>
        //     <div class="card-body">
        //       {/* <h5 class="card-title">Card title</h5> */}
        //       <p class="card-text">{name}</p>
        //     </div>
        //   </div>
        // </div>
        // </div>
        <div className ="col-md-4 text-center skill-set mb-5">
            <img src={imgUrl}/>
            <h3>{name}</h3>

        </div>
    );
};

export default SkillCard;
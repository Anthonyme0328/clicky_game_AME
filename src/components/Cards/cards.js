import React from 'react';




const  Cards = (props) => 

  (<div>

    <div className="card" style={{width: 280}}>

        <img onClick = {() => props.handleClick(props.id, props.clicked)} className="card-img-top" src={props.image} alt=""/>

    </div>
    
        </div>
    );

export default Cards;

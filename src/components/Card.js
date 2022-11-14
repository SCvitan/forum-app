import './Card.css'
import "./Users.css";
import React from 'react'


const Card = ({ userData }) => {
    

    return (
        <div className="card">
            <div>{userData.id}</div>
            <div className="card__title">{userData.name}</div>
            <div className="card__body">
                
                
                
                <div className="card__image" src="https://randomuser.me/api/portraits/women/38.jpg">img<img /></div>
            </div>

        </div>
        
  
  )
};

export default Card;

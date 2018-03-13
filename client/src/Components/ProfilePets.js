import React from 'react';
import './../css/ProfilePets.css'

const ProfilePets = (props) => {



    return (
        <div className = "ProfilePets">
            <p className = 'ProfilePets__name'>{props.petName}</p>
            <img className = 'ProfilePets__img' src = {props.imgLink} alt = "" />
            <p className = 'ProfilePets__rating'>Cuteness Rating: {props.avgRating}</p>
        </div>
    )
}


export default ProfilePets;
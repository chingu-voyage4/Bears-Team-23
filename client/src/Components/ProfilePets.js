import React from 'react';
import './../css/ProfilePets.css'

const ProfilePets = (props) => {



    return (
        <div className = "ProfilePets">
            <p className = 'ProfilePets__name'>{props.petObject.petName}</p>
            <img className = 'ProfilePets__img' src = {props.petObject.imgLink} alt = "" />
            <p className = 'ProfilePets__rating'>Cuteness Rating: {props.petObject.avgRating}</p>
            <button onClick={()=>props.deletePic(props.petObject._id)}> Delete </button>
        </div>
    )
}


export default ProfilePets;

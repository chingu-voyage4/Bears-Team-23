import React from 'react';
import './../css/ProfilePets.css'

const ProfilePets = (props) => {



    return (
        <div className = "ProfilePets">
            <p className = 'ProfilePets__name'>{props.petObject.petName}</p>
            <div className = 'ProfilePets__imgholder'>
              <img className = 'ProfilePets__img' src = {props.petObject.imgLink} alt = "" />
            </div>
            <div className = 'ProfilePets__info'>
              <p className = 'ProfilePets__rating'>Cuteness Rating: {props.petObject.avgRating.toFixed(1)}</p>
              <button className = 'ProfilePets__delete' onClick={()=>props.deletePic(props.petObject._id)}> Delete </button>
            </div>
        </div>
    )
}


export default ProfilePets;

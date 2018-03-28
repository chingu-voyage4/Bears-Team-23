import React from 'react';
import './../css/ProfilePets.css'
import classnames from 'classnames';
import DeleteModal from './DeleteModal';

class ProfilePets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseIsHovering: false,
            showDeleteModal: false
        }
    }

    

    render(){
        let deleteButtonClass = classnames({
            ProfilePets__delete: true,
            //ProfilePets__delete__show: this.state.mouseIsHovering
        }) 
        let ProfilePetsClass = classnames({
            ProfilePets: true,
            //ProfilePets__hover: this.state.mouseIsHovering
        })
        return (
            <div 
                className = {ProfilePetsClass}
                onMouseEnter = {()=> this.setState({mouseIsHovering: true})}
                onMouseLeave = {()=> this.setState({mouseIsHovering: false})}
            >
                <div className = 'ProfilePets__imgholder'>
                    <img className = 'ProfilePets__img' src = {this.props.petObject.imgLink} alt = "" />
                </div>
                <div className = 'ProfilePets__info'>
                    <p className = 'ProfilePets__name'>{this.props.petObject.petName}</p>
                    <p className = 'ProfilePets__rating'>Cuteness Rating: {Math.round(this.props.petObject.avgRating * 100)}%</p>
                    <p>From {this.props.petObject.totalRatings} votes</p>
                    <button className = {deleteButtonClass} onClick={()=>this.setState({showDeleteModal: true})}> Delete </button>
                </div>
                <DeleteModal 
                isOpen = {this.state.showDeleteModal}
                deletePic = {()=>this.props.deletePic(this.props.petObject._id)}
                closeModal = {()=> this.setState({showDeleteModal:false})}
                petName = {this.props.petObject.petName}
                />
            </div>
        )
    }
}


export default ProfilePets;

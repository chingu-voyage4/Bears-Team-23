import React from 'react';
import './../css/AnimalContainer.css';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state
}




class AnimalContainer extends React.Component {
    
    render() {
        if(this.props.user.user.authenticated || this.props.user.user.username==="Guest"){
            return (
                <div className = 'AnimalContainer'>
                <p className = "conPlaceholder">This is where the animals go</p>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default connect(mapStateToProps)(AnimalContainer);

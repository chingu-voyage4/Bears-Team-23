
//root of the frontend get /set primary store vars here
import React from 'react';


//redux conncetion
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
//action gets user info on every mount of this component
import {getUser} from './actions/authentication';

function mapStateToProps(state){//read store
  return state
}
function mapDispatchToProps(dispatch){//write to store
  return bindActionCreators({
          getUser:getUser
          }, dispatch)
}
//end redux

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      authenticated:false //only proceed after communication with the store
    }
  }
  componentDidMount(){
    console.log("CDM Mounted for Main")
    this.props.getUser()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.user.user!==this.props.user.user){//once user info comes from cdm proceed to rendering
      this.setState({authenticated:true})
    }
  }
    render(){
      //send current route from router to menu
        if(this.state.authenticated){
          return (
            <div>
                {this.props.children}
            </div>
          )
        }
        else{
          return null
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

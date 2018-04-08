import React from 'react';
import Navbar from './Navbar';
import  './../css/Rankings.css';
import Footer from './Footer';
import {userInfo, getRankings} from '../crud/CRUD';
import cuteImg from './../img/cute.png'
import notImg from './../img/not.png'

class Rankings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuteList: [],
            notCuteList: []
        }
    }
    componentDidMount() {
        this.setRankings();
    }

    setRankings = async ()=> {
        const cute = await getRankings('descending', 15);
        const notCute = await getRankings('ascending', 15)
        this.setState({
            cuteList: cute,
            notCuteList: notCute
        })
    }

    render() {
       if(userInfo().authenticated){
         return (
             <div className = 'rankingModel'>
                 <Navbar />
                     <div className = 'Rankings'>
                         <div className = 'cuteList' >
                         <img className = 'cuteLogo' src = {cuteImg} alt = ''/>
                         {this.state.cuteList.map((cuteList, index)=> {
                             return (
                                 <div className = 'cuteList__item' key = {index}>
                                     <div><img className = "cuteList__img"src = {cuteList.imgLink} alt = ""/></div>
                                     <div>
                                     <p className = 'cuteList__name'>#{index + 1} {cuteList.petName}</p>
                                     <p className = 'cuteList__rating'>Cuteness Rating: {Math.round(cuteList.avgRating * 100)}%</p>
                                     <p className = 'cuteList__votes'>From {cuteList.totalRatings} votes</p>
                                     </div>
                                 </div>
                             )
                         })}
                         </div>

                         <div className = 'notList' >
                         <img className = 'notLogo' src = {notImg} alt = ''/>
                             {this.state.notCuteList.map((cuteList, index)=> {
                                 return (
                                     <div className = 'cuteList__item' key = {index}>
                                         <div><img className = "cuteList__img"src = {cuteList.imgLink} alt = ""/></div>
                                         <div>
                                         <p className = 'cuteList__name'>#{index + 1} {cuteList.petName}</p>
                                         <p className = 'cuteList__rating'>Cuteness Rating: {Math.round(cuteList.avgRating * 100)}%</p>
                                         <p className = 'cuteList__votes'>From {cuteList.totalRatings} votes</p>
                                         </div>
                                     </div>
                                 )
                             })}

                         </div>
                     </div>
                 <Footer />
             </div>
             )
         }
       else{window.location = '/'}
     }
}

export default Rankings;

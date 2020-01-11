import React, { Component } from 'react';
import './searchcard.css'
import FetchDataShowCard from './FetchDataShowCard' 

export default class SearchCardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            moviename:"",
            value:false,
            context:""
        }; 
       this.setMovieName=this.setMovieName.bind(this)
       this.getMovieName=this.getMovieName.bind(this)
    }

    setMovieName = (e) => {
       this.setState({
           context:e.target.value
       })
    }
    getMovieName = (e) => {
        e.preventDefault();
        this.setState({
            moviename:this.state.context,
            value:true
        });
    }
    setmoviestate = () =>{
        this.setState({
            value:false
        })
    }
   
   
    render() {
       
    let DataShowCard;
    if (this.state.value === true){
        
        DataShowCard = <FetchDataShowCard mvname={this.state.moviename}/>;
        
    }
    else {
        DataShowCard = <div></div>;
    }
        return (
            <div>
                <form className="form-inline my-2 my-lg-0 " onSubmit={this.getMovieName} onChange={this.setmoviestate}>
                            <input className="form-control mr-sm-2 text-center" id="moviename" type="search" placeholder="Enter any movie/series" aria-label="Search" onChange={this.setMovieName}/>
                            <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit" value="Search" >Search</button>
                </form>
                {DataShowCard}
                {/* <FetchDataShowCard mvname={this.state.moviename}/> */}
            </div>
            
        )
    }
}

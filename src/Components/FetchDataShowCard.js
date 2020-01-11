import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
 import './FetchDataShowCard.css' 

export default class FetchDataShowCard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            moviedata:""
        }
        
        
        
    }

    async componentDidMount(){
        const url = `https://www.omdbapi.com/?apikey=9afb1fe&t=${this.props.mvname}`;
        //const response = fetch(url);
        const data = await fetch(url).then(blob => blob.json())
        this.setState({
            moviedata:data
        })
        console.log("I am called")
    }
    
    
    render() {    
        
        return (
            <div>
                <Card className="mycard">
                 <CardImg top src={this.state.moviedata.Poster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.state.moviedata.Title}</CardTitle>
                        <CardSubtitle>IMDB RATING: {this.state.moviedata.imdbRating}</CardSubtitle>
                        <CardSubtitle>Type: {this.state.moviedata.Type}</CardSubtitle><br></br>
                        <CardText>{this.state.moviedata.Plot}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

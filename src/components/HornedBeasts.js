import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //initial value is 0
            votes : 0 
        };
    }
    // make the vote + 1 when i click
    // evey click vote will increment

    increaseVote = () => {this.setState ({votes : this.state.votes + 1 });};

    // show the information

    show() {
        this.props.show(this.props.title, this.props.imgSrc , this.props.desc);
    }
    render(){
        return(
            <>
            <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.imgSrc} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.desc}
                        </Card.Text>
                        <Card.Text>
                        Number of votes: {this.state.votes}
                        </Card.Text>
                        <Button variant="primary" onClick={this.increaseVote}>Vote</Button>
                        <Button variant="info" onClick={this.show.bind(this)}>Show Model</Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default HornedBeasts;

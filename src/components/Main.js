import React from "react";

import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component{
    // make connstructor to give my atti a initial value is 0 or false ot ''(empty String)
    constructor(props){
        super(props);
        this.state ={
            sTitle : '',
             sImg : '' ,
              sDesc : '',
            showModel : false
        };
    }
    // show Model
    show = (title , img , desc) => {
        this.setState({
            sTitle : title, sImg : img , sDesc : desc,
            showModel : true
        });
    }
    // close Model
    closeModel = () => {
        this.setState({ showModel : false});
    }
    
    render(){
        // recive my data from data.json and show this data on a new array by use map 
        let newArray = this.props.newData.map(item =>{
            return(
                <>
            <HornedBeasts
            title={item.title}
            imgSrc ={item.image_url}
            desc ={item.description}
            show={this.show.bind(this)}/>
            <SelectedBeast show={this.state.showModel} close={this.closeModel}  
            sTitle ={this.state.sTitle}
            sImg ={this.state.sImg}
            sDesc ={this.state.sDesc}/>
            </>
        );
        });
        return newArray;
        
    }
}
export default Main;

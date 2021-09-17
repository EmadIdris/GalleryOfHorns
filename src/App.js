import React from "react";

// header + main + footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// i need a form 2 way to get a form 1st create a form on APP or Main 2nd create a form component
import Form from 'react-bootstrap/Form';
// condiition is to put my data into app.js
import data from './components/myData/data.json';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      sendData : data,
      hornNumber :0
    };
  }
  // make a filter 
  filter =(number) =>{
    // i filter my array 
    let filterArray = data.filter(item =>{
      // if number =0 i will return all my array (data.json) (no filter on array if number =0)
      if (number === 0){return item;}
      // else number = 1 or 2 or 3 it will make a filter on array depend on the number of horns
      // else the number not equal 1 or 2 or 3 it will show eveything in old array without filter
      else {
        if(item.horns === number){return true;} else {return false;}
      }
    });
    // return my new array (with filter)
    return filterArray;
  }
  // make a event onChange in my Form 

  eventHandler = async (event) =>{
    event.preventDefault();
    await this.setState({
      hornNumber : event.target.value,
      sendData : this.filter(Number(event.target.value))
    });
  };
      // we use a onChange to when we are make a any change on our form the data will change 
      // we use name to call this name in event (Hello Iam Emad Idris)
      // i write this comments bc when i open this code any time i want to remember this code 
  render(){
    return(
      <>
      <Header />
      
      <Form.Select name="hornNumber" aria-label="Default select example" onChange={this.eventHandler}>
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">More</option>
      </Form.Select>
      
      <Main newData={this.state.sendData} />
      <Footer />
      </>
    );
  }
}
export default App;

import logo from './logo.svg';
import './App.css';
import App2 from "./App2"
import React from "react"

// class App extends React.Component{
//   render (){
//     // return (
//     //   <div>
//     //     <h1>Hello React-06</h1>
//     //   </div>
//     // );
//     return <div><App2></App2>
//     <App2></App2>
//     <App2></App2>
//     <App2></App2></div>
//   }
// }

class App extends React.Component {
  url= 'https://www.google.com'
  constructor() {
    super()
    this.state = {
      userName: '',
      title: "hello from constructor defined state"
    }
  }
  //onClick function
  onClick = ($event) =>{
    console.log("save button is clicked", $event);
    window.open(this.url,"_blank")
  }
  onNameChange=(event)=>{
    console.log("Value is",event.target.value)
    this.setState({userName: event.target.value})
  }
    
  render(){
    return (
      <div>
        <h1>Hello {this.state.userName} user dynamically changes</h1>
        <img src={logo} onClick={this.onClick}
        alt = "React logo" width="50px" />
        <div className="text-box">
          <input onChange={this.onNameChange}/>
       </div>
      </div>
    );
  }
}

export default App;

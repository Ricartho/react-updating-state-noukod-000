// Code ClickityClick Component Here
import React, {Component}  from 'react';

  export default class ClickityClick extends Component{
    constructor(){
      super();
      this.state = {
        hasBeenClicked: false
      };
    }
      handleClick = () =>{
        // this.setState({
        //   hasBeenClicked: true
        // })
        this.setState(previousState => {
          return {
            hasBeenClicked: !previousState.hasBeenClicked
          }
        })
      };


      render(){
        return(
          <div>
            <p> I have {this.hasBeenClicked ? null : 'not'}  been clicked! </p>
            <button onClick={this.handleClick}>Click</button>
          </div>
        );
      }
  }

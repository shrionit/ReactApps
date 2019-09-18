import React, {Component} from 'react';
import './Open.css';

class Open extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    console.log("hello bahar");
  }

  render(){
    return (
      <div id='open' onClick={this.onClick}>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default Open;

import React, {Component} from 'react';
import './Open.css';

class Open extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div id='open' onClick={this.props.clickhonepr}>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default Open;

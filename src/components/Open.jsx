import React, {Component} from 'react';
import './Open.css';

class Open extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id='open'>
        {this.props.msg}
      </div>
    );
  }
}

export default Open;

import React, {Component} from 'react';
import './Open.css';

class Open extends Component{
  constructor(props){
    super(props);
    this.clickhonepr = this.clickhonepr.bind(this);
  }

  renderFolder(){

  }

  renderFile(){

  }

  clickhonepr(){
    let data = this.props.msg;
    this.props.clickkrnepr(data);
  }

  render(){
    return (
      <div id='open' onClick={this.clickhonepr}>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default Open;

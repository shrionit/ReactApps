import React, {Component} from 'react';
import Open from './Open.jsx';
import './Folder.css';
var fs = require('fs');

class VFile extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      'hello'
    );
  }
}

class Folder extends Component{
  constructor(props){
    super(props);
    this.stats = {
      folders: 'hello'
    };
  }

  render(){
    return (
      <div>
        {this.stats.folders}
        <Open />
      </div>
    );
  }
}

export default Folder;

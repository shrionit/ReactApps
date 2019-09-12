import React, {Component} from 'React';

class Folder extends Component{
  constructor(props){
    super(props);
    var fs = require('fs');
    var files = fs.readdirSync('/assets/');
  }

  render(){

  }
}

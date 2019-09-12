import React, {Component} from 'React';
var fs = require('fs');
class Folder extends Component{
  constructor(props){
    super(props);
    this.stats = {
      folders: fs.readdirSync('/assets/')
    };
  }

  render(){
    <div>
      ${this.stats.folders}
    </div>
  }
}

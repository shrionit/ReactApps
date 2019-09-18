import React, {Component} from 'react';
import Open from './Open.jsx';
import './Folder.css';
import Data from "../myjsonfile.json";

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
    this.state = {
      folders: []
    };
    this.processData = this.processData.bind(this);
    this.onClick = this.onClick.bind(this);
    this.renderFolder = this.renderFolder.bind(this);
    this.pd = {
      files: [],
      folders: [],
      CF: ''
    }
    this.processData(Data);
  }

  processData(D){
    let FILES = [];
    let FOLDERS = [];
    let satya = function (d) {
      for(let F in d){
        if(d[F]['files']){
          for(let item of d[F]['files']){
            FILES.push(item['name']);
          }
        }
        for(let FF in d[F]){
          if(FF != 'files'){
            FOLDERS.push(FF.slice(FF.lastIndexOf("\\")+1, FF.length));
          }
        }
      }
    }
    satya(D);
    this.setState({
      folders: FILES,
    });
    this.pd.files = FILES;
    this.pd.folders = FOLDERS;
  }

  onClick(folderName){
    this.pd.CF = folderName;
    let targetF = '..\\..\\Shriprakash\\Videos\\'+folderName
    console.log(targetF);
    console.log(this.renderFolder(Data.Videos[targetF]));
  }

  renderFolder(folder){
    this.state.CF = folder;
    console.log(folder);
    var rdata = [];
    for(let f in folder){
      if(f == 'files' && folder[f].length == 0){
        continue;
      }else{
        for(let d of folder[f]){
          console.log('D -'+d);
          rdata.push(<Open clickkrnepr={this.onClick} msg={d.name} />);
        }
      }
      let data = f.slice(f.lastIndexOf("\\")+1, f.length);
      rdata.push(<Open clickkrnepr={this.onClick} msg={data} />);
    }
    this.setState({
      folders: rdata
    });
    return rdata;
  }

  render(){
    let w = window.innerWidth;
    if(this.pd.CF != ''){
      return (
        <div id="folder">
          <div className="grid">
          {
            this.state.folders
          }
          </div>
        </div>
      );
    }else{
      return (
        <div id="folder">
          <div className="grid">
          {
            this.pd.folders.map(item => {
              return <Open clickkrnepr={this.onClick} msg={item} />
            })
          }
          </div>
        </div>
      );
    }
  }
}

export default Folder;

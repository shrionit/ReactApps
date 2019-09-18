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
    this.loadJSON = this.loadJSON.bind(this);
    this.processData = this.processData.bind(this);
    this.onClick = this.onClick.bind(this);
    this.pd = {
      files: [],
      folders: []
    }
    this.processData(Data);
    //this.loadJSON();
  }

  loadJSON = () => {
		fetch('../myjsonfile.json', {
				method: "get",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({
					folders: JSON.parse(data)
				});

			});
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
      folders: FILES
    });
    this.pd.files = FILES;
    this.pd.folders = FOLDERS;
  }

  onClick(){
    console.log("hello bahar");
  }

  render(){
    let w = window.innerWidth;
    return (
      <div id="folder">
        <div className="grid">
        {this.pd.folders.map(item => {
          return <Open ref={item+"--walaFolder"} clickhonepr={this.onClick} msg={item} />
        })}
        </div>
      </div>
    );
  }
}

export default Folder;

import React, {Component} from 'react';
import Folder from './Folder';
import VFile from './VFile';
import Navigation from './Navigation';
import './bootstrap.min.css';

class Plate extends Component{
    constructor(props){
        super(props);
        this.cd = [];
        this.loadJSON();
        this.nav = [];
        this.cd = this.state.Data;
    }

    state = {
        cl: [],
        navs: [],
        Data: {}
    };

    loadJSON = () => {
        fetch('myjsonfile.json', {
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
                this.cd = data
                this.getF(this.cd, { name: 'Videos', pd: this.cd });
                this.setState({
                    Data: data
                });
            });
    }

    goTo = (folder, pname) => {
        
    }

    getF = (folder, pname) => {
        let c = [];
        for(let i in folder){
            if(i == 'files'){
                let ff = folder[i];
                for(let f in ff){
                    c.push(<VFile fname={ff[f].name} type={ff[f].type} path={ff[f].path} />);
                }
                continue;
            }
            c.push(<Folder fname={i.slice(i.lastIndexOf("\\")+1, i.length)} rname={i} clickhandler={this.getF} parentD={folder} />);
        }
        
        this.setState({
            cl: c
        });
        this.cf = c;
        this.cd = folder;
        if(pname){
            this.currentFolder = pname.name;
            this.nav.push(pname);
        }
        this.setState({
            navs: this.nav
        });
    }

    render(){
        if(this.state.cl.length != 0){
            return (
                <div className='jumbotron bg-dark'>
                    <Navigation current={this.state.navs} clickhandler={this.goTo} />
                    <div className='row'>
                        {
                            this.state.cl
                        }
                    </div>
                </div>
            );
        }else{
            return (
                <div className='jumbotron bg-dark'>
                    <Navigation />
                    <div className='row'>
                        {
                            this.cf
                        }
                    </div>
                </div>
            );
        }
    }
}
export default Plate;
import React, {Component} from 'react';
import fIcon from './drawing.svg';
import './bootstrap.min.css';
import './custom.css';

class Folder extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.fname,
            path: this.props.path
        }
    }

    clickhandle = () =>{
        this.props.clickhandler(this.props.parentD[this.props.rname], {name: this.props.fname, pd: this.props.parentD});
    }

    render(){
        return(
            <div className='container col-lg-3 folder bg-dark shadowHover' onClick={this.clickhandle}>
                    <div className="col-12">
                        <img src={fIcon} width='100em' className='col-4' height='100em' atl='folderIcon'></img>
                        <strong className='text-info col-8'>{this.props.fname}</strong>
                    </div>
            </div>
        );
    }
}

export default Folder;
import React, { Component } from 'react';
import fIcon from './video-player.svg';
import './bootstrap.min.css';
import './custom.css';

class VFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            type: this.props.type,
            path: this.props.path
        }
    }

    clickhandler =()=> {
        this.refs.video.className = 'col-12';
        this.refs.video.style.height = 'auto';
        
    }
    failed = (e) => {
    // video playback failed - show a message saying why
    switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
            alert('You aborted the video playback.');
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            alert('A network error caused the video download to fail part-way.');
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
            break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
            break;
        default:
            alert('An unknown error occurred.');
            break;
    }
}

    render() {
        return (
            <div className='container col-lg-3 folder bg-dark shadowHover' onClick={this.clickhandler}>
                <div className="col-12">
                    <video ref='video' width='100em' className='col-4' height='100em' controls>
                        <source src={this.props.path} type={'video/' + ((this.props.type == 'mp4') ? this.props.type :'webm')} />
                    </video>
                    <strong className='text-info col-8'>{this.props.fname}</strong>
                </div>
            </div>
        );
    }
}

export default VFile;
import React, { Component } from 'react';
import fIcon from './drawing.svg';
import './bootstrap.min.css';
import './custom.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: []
        }
    }

    handleClick = () =>{
        let F = this.props.current;
        let ns = [];
        for (let i in F) {
            console.log(F[i]);
            ns.push(F[i].name);
        }
        this.setState({
            navs: ns
        });
    }

    render() {
        return (
            <ul className="breadcrumb col-12 bg-dark">
                {
                    this.state.navs.forEach(n => {
                        return <li className='breadcrumb-item bg-success' onClick={this.handleClick}>hello</li>
                    })
                }
            </ul>
        );
    }
}

export default Navigation;
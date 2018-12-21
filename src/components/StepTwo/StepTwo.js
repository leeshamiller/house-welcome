import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepTwo extends Component {
    constructor() {
        super()

        this.state = {
            img: ''
        }
    }

    handleChange(props, val) {
        this.setState({
            [props]: val
        })
    }

    render() {
        return (
            <div>
                    <span>
                        Image URL
                        <input onChange={(e) => this.handleChange('img', e.target.value)}/>
                    </span>
                    <Link to='/wizard/step3' ><button>Next Step</button></Link>
            </div>
        )
    }
}

export default StepTwo;
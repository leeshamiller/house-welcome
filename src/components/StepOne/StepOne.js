import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StepOne extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
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

                <div className='input_boxes'>
                    <span>
                        Property Name
                        <input onChange={(e) => this.handleChange('name', e.target.value)}/>
                    </span>
                    <span>
                        Address
                        <input onChange={(e) => this.handleChange('address', e.target.value)}/>
                    </span>
                    <span>
                        City
                        <input onChange={(e) => this.handleChange('city', e.target.value)}/>
                    </span>
                    <span>
                        State
                        <input onChange={(e) => this.handleChange('state', e.target.value)}/>
                    </span>
                    <span>
                        Zip
                        <input onChange={(e) => this.handleChange('zipcode', e.target.value)}/>
                    </span>
                </div>
                <Link to='/wizard/step2' ><button>Next Step</button></Link>
            </div>
        )
    }
}

export default StepOne;
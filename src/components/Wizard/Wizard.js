import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
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
                Wizard
                <Link to='/' ><button>Cancel</button></Link>

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
            </div>
        )
    }
}

export default Wizard;



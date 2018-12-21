import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleChange(props, val) {
        this.setState({
            [props]: val
        })
    }

    addHouse() {
        let {name, address, city, state, zipcode, img, mortgage, rent} = this.state
        axios.post('/api/house', {name, address, city, state, zipcode, img, mortgage, rent}).then(({data: house}) => {
            this.setState(house)
        })
    }

    render() {
        return (
            <div>
                <div className='input_boxes'>
                    <span>
                        Monthly Mortgage Amount
                        <input onChange={(e) => this.handleChange('mortgage', e.target.value)}/>
                    </span>
                    <span>
                        Desired Monthly Rent
                        <input onChange={(e) => this.handleChange('rent', e.target.value)}/>
                    </span>
                    
                </div>

                <button onClick={() => this.addHouse()}><Link to='/' >Complete</Link></button>
            </div>
        )
    }
}

export default StepThree;
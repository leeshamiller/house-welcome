import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            img: '',
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

                <button onClick={() => this.addHouse()}><Link to='/' >Complete</Link></button>
            </div>
        )
    }
}

export default Wizard;



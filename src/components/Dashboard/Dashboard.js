import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            listOfHouses: []
        }
    }

    
    getAllHouses() {
        axios.get('/api/houses').then((res) => {
            this.setState({
                listOfHouses: res.data
            })
        })
    }
    componentDidMount(){
        this.getAllHouses()
    }

    render() {
        let displayHouses = this.state.listOfHouses.map((house) => {
            return (
                <House 
                key={house.id}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zip={house.zipcode}
                />
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {displayHouses}
            </div>
        )
    }
}

export default Dashboard;
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
    componentDidMount() {
        this.getAllHouses()
    }

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`).then((res) => {
            this.getAllHouses(res.data)
        })
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
                deleteHouse={() => this.deleteHouse(house.id)}
                />
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {displayHouses}
            </div>
        )
    }
}

export default Dashboard;
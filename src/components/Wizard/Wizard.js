import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepTwo} />
                <Route path='/wizard/step3' component={StepThree} />
                <Link to='/' ><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;



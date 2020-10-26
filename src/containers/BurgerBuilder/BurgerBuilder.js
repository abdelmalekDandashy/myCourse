import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Pax from '../../hoc/Pax';
class BurgerBuilder extends Component {
    render() {
        return (
            <Pax>  
                <Burger></Burger>
                <div>Build Controls</div>  
            </Pax>
        );
    }
}

export default BurgerBuilder;
import React, { Component } from 'react'
import {View} from 'react-native'

import Menu from './components/Menu'
import DishDetail from './components/DishDetail'

import DISHES from './shared/Dishes'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            dishes: DISHES,
            selectedDish: null
        };

        onSelectDish(dishId) {
            this.setState({selectedDish: dishId})
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Menu 
                    dishes={this.state.dishes}
                    onPress={(dishId) => this.onSelectDish(dishId)}
                />
                <DishDetail 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                />
            </View>
        )
    }
} 
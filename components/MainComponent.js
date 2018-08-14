import React, { Component } from 'react'

import Menu from './components/Menu'
import DISHES from './shared/Dishes'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            dishes: DISHES
        }
    }

    render() {
        return (
            <Menu dishes={this.state.dishes}/>
        )
    }
} 
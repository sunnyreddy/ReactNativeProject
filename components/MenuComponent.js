import React, {Component} from 'react'
import {View, FlatList} from 'react-native'

import {ListItem} from 'react-native-elements'

function Menu(props) {

    const renderMenuItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                leftAvatar={{ source: require('./images/uthapizza.png') }}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={props.onPress(item.id)}
            />
        )
    }

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={(dish) => dish.id.toString()}
        />
    )
}

export default Menu
import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native'

import styles from './styles'

export default function Categories(props) {
    return (
       <View style={styles.container}>
            <Image style={styles.image} source={props.image}/>
            <Text style={styles.title}>{props.title}</Text>
       </View> 
    )
}
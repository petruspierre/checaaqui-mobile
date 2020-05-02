import React from 'react'

import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import styles from './styles'

export default function Categories(props) {
    return (
       <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={props.image}/>
            <Text style={styles.title}>{props.title}</Text>
       </TouchableOpacity> 
    )
}
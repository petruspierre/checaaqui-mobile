import React from 'react'

import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import styles from './styles'

export default function ProductList (props){

    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Product', {image: props.image, title: props.title, type: props.type})}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
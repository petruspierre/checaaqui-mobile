import React from 'react'

import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Categories(props) {

    const navigation = useNavigation();

    return (
       <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductList')}>
            <Image style={styles.image} source={props.image}/>
            <Text style={styles.title}>{props.title}</Text>
       </TouchableOpacity> 
    )
}
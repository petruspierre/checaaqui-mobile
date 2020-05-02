import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import commonStyles from '../../commonStyles'

import logo from '../../../assets/logo_dark.png'

export default function Header(props){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={props.onPress}>
                <Feather name={props.icon} size={40} color={commonStyles.colors.primary}/>
            </TouchableOpacity>
            <Image style={styles.logo} source={logo}/>
        </View>
    )
}
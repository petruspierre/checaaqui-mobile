import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native'

import styles from './styles'
import logo from '../../../assets/logo_dark.png'

import Header from '../../components/Header'

export default function About({ navigation }){
    return (
        <View style={styles.container}>

            <Header icon="menu" onPress={() => navigation.openDrawer()}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sobre nós</Text>
            </View>
            
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <View style={styles.section}>
                    <Text style={styles.caption}>Temos como missão auxiliar consumidores que não estão habituados com o ambiente virtual para realizar compras.</Text>
                    <Text style={styles.caption}>Pretendemos reunir informações sobre os produtos e lojas de compradores experientes para poder transmitir a confiança necessária para realizar a compra</Text>
                </View>
            </View>
        </View>
    )
}
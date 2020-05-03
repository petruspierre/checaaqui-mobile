import React from 'react'

import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native'

import Header from '../../components/Header'

import styles from './styles'
import commonStyles from '../../commonStyles'

export default function History({navigation}) {
    return (
        <View style={styles.container}>
            <Header icon="menu" onPress={() => navigation.openDrawer()}/>

            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>Histórico</Text>
            </View>
        </View>
    )
}
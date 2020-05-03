import React, {useState} from 'react'
import {
    View,
    FlatList,
    Text
} from 'react-native'

import styles from './styles'
import commonStyles from '../../commonStyles'

import Product from '../../components/Product'
import Header from '../../components/Header'

export default function ProductList ({ navigation, route }){

    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Smart TV LED 43 Samsung 43RU7100 Ultra HD 4K',
            image: {
                uri: 'https://images-americanas.b2w.io/produtos/01/00/img/134240/6/134240675_1SZ.jpg'
            }
        },
        {
            id: 2,
            title: 'TV LED 32" Philco PTV32G50D HD',
            image: {
                uri: 'https://images-americanas.b2w.io/produtos/01/00/img/134574/7/134574798_1GG.jpg'
            }
        },
    ])

    return(
        <View style={styles.container}>

            <Header icon="arrow-left" onPress={() => navigation.goBack()}/>

            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>{route.params.name}</Text>
            </View>

            <FlatList 
                data={products}
                renderItem={({item}) => <Product title={item.title} image={item.image} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
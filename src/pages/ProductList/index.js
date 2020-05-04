import React, {useState, useEffect} from 'react'
import {
    View,
    FlatList,
    Text
} from 'react-native'

import styles from './styles'
import commonStyles from '../../commonStyles'

import api from '../../services/api'

import Product from '../../components/Product'
import Header from '../../components/Header'
import Loading from '../../components/Loading'

export default function ProductList ({ navigation, route }){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function loadProducts(){
        setLoading(true)
        const response = await api.get(`/products/?product_type=${route.params.name}`)

        setProducts(response.data.results)
        setLoading(false)
    }

    useEffect(() => {
        setProducts([])
        loadProducts()
    }, [route.params.name])

    if(loading){
        return (
          <View style={styles.container}>
            <Header icon="arrow-left" onPress={() => navigation.goBack()}/>
            <View style={commonStyles.titleContainer}>
                <Text style={commonStyles.title}>{route.params.name}</Text>
            </View>
            <Loading />
          </View>
        )
      } else {
          return(
              <View style={styles.container}>
      
                  <Header icon="arrow-left" onPress={() => navigation.goBack()}/>
      
                  <View style={commonStyles.titleContainer}>
                      <Text style={commonStyles.title}>{route.params.name}</Text>
                  </View>
      
                  <FlatList 
                      data={products}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => <Product title={item.name} image={item.url_image} type={route.params.name}/>}
                      keyExtractor={item => String(item.name)}
                  />
              </View>
          )
      }
}
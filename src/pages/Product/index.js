import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import {Feather, FontAwesome} from '@expo/vector-icons'
import styles from './styles.js'
import { TouchableOpacity } from 'react-native-gesture-handler'

import commonStyles from '../../commonStyles'

import Review from '../../components/Review'

export default function Product({navigation}){
  return (
    <View style={styles.container}>

      <View style={styles.productContainer}>

        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={26} color="#fff"/>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: "#fff"}}>
          <Image style={styles.productImage} source={{uri: "https://images-americanas.b2w.io/produtos/01/00/img/134240/6/134240675_1SZ.jpg"}}/>
        </View>
        <Text style={styles.productTitle}>Smart TV LED 43'' Samsung 43RU7100 Ultra HD 4K</Text>
        <View style={styles.aditionalInfo}>
          <Text style={styles.productType}>TV e eletrônicos</Text>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <FontAwesome name="star" size={16} color="#fff"/>
            <Text style={styles.productScore}>4.2</Text>
          </View>
        </View>
      </View>

      <View style={styles.reviewContainer}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Avaliações de outros compradores</Text>
        <Text style={styles.orderBy}>Ordenar por: Relevância</Text>

        <Review name="José Ernesto da Silva" shop="Lojas Americanas" review="Ah mano sei lá até que curti o produto porém sei la sabe n sei só sei que nada sei ja dizia aquele filósofo, não sei o nome pois não cheguei a concluir o ensino médio"/>
        {/* <Review name="Paula Tejano" shop="Casas Bahia" review="Achei supeeeeeeeeeeeeer nossa amei demais nossa gente zero defeitossssssssssss. Recomendo a todeeeeees, super rápido a entrega inclusie viu"/> */}
        
      </View>

      <View style={styles.doReviewContainer}>
        <Text style={styles.hasExperience}>Tem alguma experiência com este produto?</Text>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.buttonText}>AVALIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
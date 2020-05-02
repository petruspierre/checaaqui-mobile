import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import styles from './styles'
import commonStyles from '../../commonStyles'

import Review from '../../components/Review'

export default function Profile({ navigation, route }){

  const [reviews, setReviews] = useState([
    {
      id: '1',
      name: 'José E. da Silva',
      shop: 'Lojas Americanas',
      review: 'Ah mano sei lá até que curti o produto porém sei la sabe n sei só sei que nada sei ja dizia aquele filósofo, não sei o nome pois não cheguei a concluir o ensino médio'
    },
    {
      id: '2',
      name: 'Paula Tejano',
      shop: 'Casas Bahia',
      review: 'Achei supeeeeeeeeeeeeer nossa amei demais nossa gente zero defeitossssssssssss. Recomendo a todeeeeees, super rápido a entrega inclusie viu'
    },
  ])

  if(!route.params.mine){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color={commonStyles.colors.primary} size={40}/>
        </TouchableOpacity>
        <Text style={styles.logo}>Checa Aqui</Text>
        <View style={styles.header}>
                  
          <View style={styles.bordinha}>
            <Image style={styles.image} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}}/>
          </View>
  
          <View>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={styles.score}>Pontuação: 120</Text>
          </View>
        </View>
  
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Solicitar Atendimento</Text>
        </TouchableOpacity>
  
        <Text style={styles.reviewTitle}>Avaliações</Text>
  
        <FlatList 
            data={reviews}
            renderItem={({ item }) => <Review name={item.name} shop={item.shop} review={item.review} profile={true}/>}
            keyExtractor={item => item.id}
            horizontal={true}
          />
  
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.openDrawer()}>
          <Feather name="menu" color={commonStyles.colors.primary} size={40}/>
        </TouchableOpacity>
        <Text style={styles.logo}>Checa Aqui</Text>
        <View style={styles.header}>
                  
          <View style={styles.bordinha}>
            <Image style={styles.image} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}}/>
          </View>
  
          <View>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={styles.score}>Pontuação: 120</Text>
          </View>
        </View>
  
        <Text style={styles.reviewTitle}>Avaliações</Text>
  
        <FlatList 
            data={reviews}
            renderItem={({ item }) => <Review name={item.name} shop={item.shop} review={item.review} profile={true}/>}
            keyExtractor={item => item.id}
            horizontal={true}
          />
  
      </View>
    )
  }
  
}
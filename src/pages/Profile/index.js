import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'

import {Feather} from '@expo/vector-icons'

import styles from './styles'

import Review from '../../components/Review'
import Header from '../../components/Header'
import Loading from '../../components/Loading'

import api from '../../services/api'

function NoAvaliation({mine}){
  if(mine){
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Você ainda não tem nenhuma avaliação publicada</Text>
      </View>
    )
  } else {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Este usuário ainda não tem nenhuma avaliação publicada</Text>
      </View>
    )
  }
}

export default function Profile({ navigation, route }){

  const [reviews, setReviews] = useState([])

  const [username, setUsername] = useState('')
  const [id, setId] = useState(0)
  const [points, setPoints] = useState('')
  const [score, setScore] = useState('')
  const [loading, setLoading] = useState(false)
  const [isPremium, setIsPremium] = useState(false)

  async function handleAskAttendance(){

    const data = {
      attendant: id,
      product: route.params.product
    }

    console.log(data)

    const token = await AsyncStorage.getItem('token')

    Alert.alert("Sucesso!", `O seu atendimento foi solicitado à ${route.params.username}. Aguarde o contato.`)
    
    const response = await api.post('/attendance/client/', data, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    console.log(response.data)
  }

  async function loadStats(){

    setLoading(true)
    let response = await api.get(`/users/?name=${route.params.username}`)
    const profile = response.data.results[0]

    response = await api.get(`/reviews/?author=${route.params.username}`)
    const _reviews = response.data.results

    setUsername(profile.username)
    setPoints(profile.profile.points)
    setScore(profile.profile.score)
    setId(profile.id)
    setReviews(_reviews)
    setIsPremium(profile.profile.is_premium)

    setLoading(false)
  }

  useEffect(() => {
    loadStats()
  }, [route.params.username])

  if(loading){
    return (
      <View style={styles.container}>
        {!route.params.mine ? <Header icon="arrow-left" onPress={() => navigation.goBack()}/>:<Header icon="menu" onPress={() => navigation.openDrawer()}/>}
        <Loading />
      </View>
    )
  } else {

    return (
      <View style={styles.container}>
  
        {!route.params.mine ? <Header icon="arrow-left" onPress={() => navigation.goBack()}/>:<Header icon="menu" onPress={() => navigation.openDrawer()}/>}
  
        <View style={styles.header}>
  
          <View style={styles.bordinha}>
            <Image style={styles.image} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}}/>
          </View>
  
          {isPremium && <Feather style={{position: "absolute", right: 16, top: 16}}name="star" size={28} color="#fff"/>}
          <View>
            <Text style={styles.name}>{username}</Text>
            <Text style={styles.score}>Pontuação: {points}</Text>
          </View>
        </View>
  
        {!route.params.mine && !route.params.ranking && (
        <TouchableOpacity style={styles.button} onPress={handleAskAttendance}>
          <Text style={styles.buttonText}>Solicitar Atendimento</Text>
        </TouchableOpacity>
        )}
  
        <Text style={styles.reviewTitle}>Avaliações</Text>
  
        {reviews.length === 0 && <NoAvaliation mine={route.params.mine} />}
  
        <FlatList 
            data={reviews}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Review name={item.product} shop={item.formated_store[1]} review={item.description} profile={true}/>}
            keyExtractor={item => String(item.id)}
            horizontal={true}
          />
  
      </View>
    )
  }
  
}
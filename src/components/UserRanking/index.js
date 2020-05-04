import React from 'react'
import {TouchableOpacity,Image, View, Text} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'

import styles from './styles'

export default function UserRanking( props ){

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('Profile', {username: props.name, mine: false, ranking: true})}>
      <Image style={styles.userImage} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}}/>
      <Text style={styles.userName}>{props.name}</Text>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <View style={styles.scoreContainer}>
          <Feather name="star" />
          <Text style={styles.userScore}>{props.score}</Text>
        </View>
        <Text style={{marginLeft: "auto", color: "#666"}}>{props.points}</Text>
      </View>
    </TouchableOpacity>
  )
}
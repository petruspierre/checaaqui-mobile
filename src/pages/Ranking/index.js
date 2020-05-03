import React, {useState}from 'react'
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import commonStyles from '../../commonStyles'

import Header from '../../components/Header'

function UserRanking( props ){

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('Profile', {name: props.name, mine: false})}>
      <Image style={styles.userImage} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}}/>
      <Text style={styles.userName}>{props.name}</Text>
      <Text style={styles.userScore}>{props.score}</Text>
    </TouchableOpacity>
  )
}

export default function Ranking({ navigation }){

  const [ranking, setRanking] = useState([
    {
      id: 1,
      name: "Petrus Pierre",
      score: "120"
    },
    {
      id: 2,
      name: "Raquel Patrício",
      score: "100"
    },
    {
      id: 3,
      name: "Paulo Eduardo",
      score: "80"
    },
  ])

  return (
    <View style={styles.container}>
      <Header icon="menu" onPress={() => navigation.openDrawer()}/>

      <View style={commonStyles.titleContainer}>
        <Text style={commonStyles.title}>Ranking</Text>
      </View>

      <FlatList 
        data={ranking}
        renderItem={({item}) => <UserRanking name={item.name} score={item.score}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
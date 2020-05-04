import React, {useState, useEffect}from 'react'
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import commonStyles from '../../commonStyles'

import Header from '../../components/Header'
import UserRanking from '../../components/UserRanking'
import Loading from '../../components/Loading'

import api from '../../services/api'

export default function Ranking({ navigation }){

  const [ranking, setRanking] = useState([])
  const [loading, setLoading] = useState(false)
  const [refreshRank, setRefreshRank] = useState(false)

  async function loadRanking(){
    setLoading(true)
    const response = await api.get('/users/?order=relevance')

    setRanking(response.data.results)
    setLoading(false)
  }

  useEffect(() => {
    loadRanking()
  }, [])

  if(loading) {
    return(
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>
    
        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>Ranking</Text>
        </View>
        <Loading />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>
  
        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>Ranking</Text>
        </View>
  
        <FlatList 
          onRefresh={() => {
            setRefreshRank(true)
            loadRanking()
            setRefreshRank(false)
          }}
          refreshing={refreshRank}
          data={ranking}
          renderItem={({item}) => <UserRanking name={item.username} score={(item.profile.score).toFixed(2)} points={item.profile.points}/>}
          keyExtractor={item => String(item.id)}
        />
      </View>
    )
  }
}
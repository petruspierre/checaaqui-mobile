import React, {useEffect} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'

import {AirbnbRating} from 'react-native-ratings'

import styles from './styles'
import Moment from 'moment'

export default function AttendanceClient(props){

  useEffect(() => {
    Moment.locale('pt-br')
  }, [])

  return(
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.header}>
          <Text style={styles.title}>Atendimento com {props.client}</Text>
        </View>
        <Text style={styles.caption}>Produto: {props.product}</Text>
        <Text style={styles.caption}>Pedido em: {Moment(props.createdAt).format('L')}</Text>
        {!props.attendantWasEvaluated ? <Text style={styles.caption}>Avalie este atendimento</Text> :
        (
          <View style={{flexDirection: "row", marginTop: 8,}}>
            <Text style={styles.caption}>Nota para o atendimento: </Text>
            <AirbnbRating 
                size={15}
                showRating={false}
                isDisabled={true}
                defaultRating={props.grade}
                starContainerStyle={{backgroundColor: "#f9f9f9"}}
            />
          </View>
        )}
      </TouchableOpacity>
  )
}
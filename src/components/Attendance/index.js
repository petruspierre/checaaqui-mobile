import React, {useEffect} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'

import {AirbnbRating} from 'react-native-ratings'

import styles from './styles'
import Moment from 'moment'
import 'moment/locale/pt-br'

export default function Attendance(props){

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.header}>
          <Text style={styles.title}>Atendimento com {props.client}</Text>
        </View>
        <Text style={styles.caption}>Produto: {props.product}</Text>
        <Text style={styles.caption}>Pedido {Moment(props.createdAt).locale('pt-br').startOf(props.createdAt).fromNow()}</Text>
        {!props.attendantWasEvaluated ? <Text style={styles.caption}>Aguarde avaliação do cliente</Text> : 
        (
          <View style={{flexDirection: "row", marginTop: 8,}}>
            <Text style={styles.caption}>Nota para o cliente: </Text>
            <AirbnbRating 
                size={15}
                showRating={false}
                isDisabled={true}
                defaultRating={props.clientScore}
                starContainerStyle={{backgroundColor: "#f9f9f9"}}
            />
          </View>
          )}
    </TouchableOpacity>
  )
}
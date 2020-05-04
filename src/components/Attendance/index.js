import React, {useEffect} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'

import styles from './styles'
import Moment from 'moment'

export default function Attendance(props){

  useEffect(() => {
    Moment.locale('pt-br')
  }, [])

  if(props.attendant){
    return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
          <View style={styles.header}>
            <Text style={styles.title}>Atendimento com {props.client}</Text>
          </View>
          <Text style={styles.caption}>Produto: {props.product}</Text>
          <Text style={styles.caption}>Pedido em: {Moment(props.createdAt).format('L')}</Text>
          {!props.attendantWasEvaluated ? <Text style={styles.caption}>Aguarde avaliação do cliente</Text> : <Text style={styles.caption}>Nota para o cliente: {(props.clientScore).toFixed(2)}</Text>}
      </TouchableOpacity>
    )
  } else {
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
          <View style={styles.header}>
            <Text style={styles.title}>Atendimento com {props.attendant}</Text>
          </View>
          <Text style={styles.caption}>Produto: {props.product}</Text>
          <Text style={styles.caption}>Pedido em: {Moment(props.createdAt).format('L')}</Text>
          {!props.attendantWasEvaluated ? <Text style={styles.caption}>Avalie este atendimento</Text> : <Text style={styles.caption}>Nota para o atendimento: {(props.attendantScore).toFixed(2)}</Text>}
        </TouchableOpacity>
    )
  }
}
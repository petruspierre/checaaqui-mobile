import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons'
import {RadioButton} from 'react-native-paper'

import commonStyles from '../../commonStyles'
import styles from './styles'

export default function Home({ navigation }){

  const [checked, setChecked] = useState('produto')
  const [placeholder, setPlaceHolder] = useState('Digite o nome do produto')
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.header} colors={['#3d579e', '#3D57AA']} start={[0.4,0.5]} end={[0.6,0.8]}>
        
        <View style={styles.headerBar}>
          <FontAwesome name="bars" color="#fff" size={32} style={styles.menuIcon}/>
          <Text style={styles.title}>Checa Aqui</Text>
        </View>

        <View style={styles.headerCheck}>
          <Text style={styles.welcomeText}>Procuro um...</Text>

          <View style={{flexDirection: "row"}}>
            <View style={styles.radio}>
              <RadioButton 
                value="produto"
                status={checked === "produto" ? "checked" : "unchecked"}
                color="#fff"
                onPress={() => {
                  setChecked("produto")
                  setPlaceHolder("Digite o nome do produto")
                }}
              />
              <Text style={{color: "#fff", fontSize: 18}}>Produto</Text>
            </View>
            <View style={styles.radio}> 
              <RadioButton 
                value="atendente"
                status={checked === "atendente" ? "checked" : "unchecked"}
                color="#fff"
                onPress={() => {
                  setChecked("atendente")
                  setPlaceHolder("Digite o nome do atendente")
                }}
              />
              <Text style={{color: "#fff", fontSize: 18}}>Atendente</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              value={search}
              placeholder={placeholder}
              onChangeText={text => setSearch(text)}
            />
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
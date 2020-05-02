import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import {Feather} from '@expo/vector-icons'
import {RadioButton} from 'react-native-paper'

import commonStyles from '../../commonStyles'
import styles from './styles'

import Categories from '../../components/Categories'

import logoEletrodomestico from '../../../assets/icons/eletrodomestico.png'
import logoTelevisao from '../../../assets/icons/televisao.png'
import logoModa from '../../../assets/icons/camisa.png'
import logoMoveis from '../../../assets/icons/moveis.png'
import logoEsportes from '../../../assets/icons/bola.png'
import logoJogos from '../../../assets/icons/jogo.png'

export default function Home({ navigation }){

  const [checked, setChecked] = useState('produto')
  const [placeholder, setPlaceHolder] = useState('Digite o nome do produto')
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          <Feather name="menu" color={commonStyles.colors.primary} size={40}/>
        </TouchableOpacity>
        <Text style={styles.title}>Checa Aqui</Text>
      </View>

      <LinearGradient style={styles.header} colors={['#092060', '#051A52']} start={[0.4,0.5]} end={[0.6,0.8]}>  
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
              <Feather name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.categoriesContainer}>
        <Categories title="Eletrodomésticos" image={logoEletrodomestico}/>
        <Categories title="Televisões" image={logoTelevisao}/>
      </View>
      <View style={styles.categoriesContainer}>
        <Categories title="Moda" image={logoModa}/>
        <Categories title="Móveis" image={logoMoveis}/>
      </View>
      <View style={styles.categoriesContainer}>
        <Categories title="Esporte e lazer" image={logoEsportes}/>
        <Categories title="Jogos" image={logoJogos}/>
      </View>
      
    </View>
  )
}
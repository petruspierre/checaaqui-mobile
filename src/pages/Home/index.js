import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import {Feather} from '@expo/vector-icons'
import {RadioButton} from 'react-native-paper'

import commonStyles from '../../commonStyles'
import styles from './styles'

import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Product from '../../components/Product'
import UserRanking from '../../components/UserRanking'
import Loading from '../../components/Loading'

import logoEletrodomestico from '../../../assets/icons/eletrodomestico.png'
import logoTelevisao from '../../../assets/icons/televisao.png'
import logoCelular from '../../../assets/icons/celular.png'
import logoMoveis from '../../../assets/icons/moveis.png'
import logoEsportes from '../../../assets/icons/bola.png'
import logoJogos from '../../../assets/icons/jogo.png'

import api from '../../services/api'

export default function Home({ navigation }){

  const [checked, setChecked] = useState('produto')
  const [placeholder, setPlaceHolder] = useState('Digite o nome do produto')
  const [search, setSearch] = useState('')
  const [categoriesVisible, setCategoriesVisible] = useState(true)
  const [loading, setLoading] = useState(false)

  const [productList, setProductList] = useState([])
  const [attendantsList, setAttendantsList] = useState([])

  async function handleSearch(){
    if(search){
      setLoading(true)
      setCategoriesVisible(false)

      if(checked === 'produto'){
        const response = await api.get(`/products/?name=${search}`)
  
        setProductList(response.data.results)
      } else {
        const response = await api.get(`/users/?name=${search}`)
  
        console.log(response.data.results)
        setAttendantsList(response.data.results)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    setCategoriesVisible(true)
  }, [])

  return (
    <View style={styles.container}>

      <Header icon="menu" onPress={() => navigation.openDrawer()}/>

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
              placeholderTextColor="#555"
              onChangeText={text => {
                setSearch(text)
              }}
            />
            {!categoriesVisible && (<TouchableOpacity style={{backgroundColor: "#ddd", height: 50, justifyContent: "center", paddingRight: 8,}}
              onPress={() => {
                setSearch('')
                setCategoriesVisible(true)
              }}> 
              <Feather name="x" size={24} color="#aaa"/>
            </TouchableOpacity>)}
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Feather name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {
        categoriesVisible &&
        (
          <View>
            <View style={styles.categoriesContainer}>
              <Categories title="Eletrodomésticos" image={logoEletrodomestico}/>
              <Categories title="Televisões" image={logoTelevisao}/>
            </View>
            <View style={styles.categoriesContainer}>
              <Categories title="Celulares" image={logoCelular}/>
              <Categories title="Móveis" image={logoMoveis}/>
            </View>
            <View style={styles.categoriesContainer}>
              <Categories title="Esporte e Lazer" image={logoEsportes}/>
              <Categories title="Jogos" image={logoJogos}/>
            </View>
          </View>
        )
      }

      { !categoriesVisible && loading && <Loading />}

      {
        !categoriesVisible && !loading && checked === 'produto' && 
        (
          productList.length > 0 ?
          <FlatList 
            data={productList}
            renderItem={({item}) => <Product title={item.name} type={item.product_type} image={item.image}/>}
            keyExtractor={item => String(item.name)}
          /> :
          <Text style={{marginTop: 80}}>Nenhum resultado encontrado com sua pesquisa</Text>
        )
      }

      {
        !categoriesVisible && !loading && checked === 'atendente' && 
        (
          attendantsList.length > 0 ?
          <FlatList 
            data={attendantsList}
            renderItem={({item}) => <UserRanking name={item.username} score={item.profile.score} points={item.profile.points}/>}
            keyExtractor={item => String(item.username)}
          /> :
          <Text style={{marginTop: 80}}>Nenhum resultado encontrado com sua pesquisa</Text>
        )
      }
      
    </View>
  )
}
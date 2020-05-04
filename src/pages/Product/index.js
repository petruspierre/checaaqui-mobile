import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Picker,
  AsyncStorage
} from 'react-native'

import {Feather, FontAwesome} from '@expo/vector-icons'
import styles from './styles.js'

import { Rating } from 'react-native-ratings'

import api from '../../services/api'

import Review from '../../components/Review'
import Loading from '../../components/Loading'

export default function Product({navigation, route}){
  
  const [review, setReview] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [reviews, setReviews] = useState([])
  const [selectedShop, setSelectedShop] = useState('AMER')
  const [grade, setGrade] = useState(2.5)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function getProductDetails(){
    setLoading(true)
    const response = await api.get(`products/detail/?product=${route.params.title}`)
    console.log(response.data.reviews)
    setReviews(response.data.reviews)
    setLoading(false)
  }

  function handleOpenModal(){
    setError(false)
    setModalVisible(true)
  }

  async function handleSubmitReview(){

    if(!review || !selectedShop || !grade){
      setError(true)
      setErrorMessage('Preencha todos os campos')
    } else if(grade > 5 || grade < 0){
      setError(true)
      setErrorMessage('Valor da nota deve estar entre 0 e 5')
    } else {
      setError(false)
  
      const data = {
        store: selectedShop,
        description: review,
        grade,
        product: route.params.title
      }

      console.log(data)
  
      const token = await AsyncStorage.getItem('token')
  
      const response = await api.post('/reviews/', data, {
        headers: {
          Authorization: `Token ${token}`
        }
      })

      setModalVisible(false)
      getProductDetails()
    }
  }

  useEffect(() => {
    setGrade('')
    setReview('')
    setSelectedShop('AMER')
    setReviews([])
    getProductDetails()
  }, [route.params.title])


  if(loading){
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
  
        <Modal 
          animationType="fade"
          transparent={true}
          visible={modalVisible}>
  
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> 
              <View style={{flex: 0.5, backgroundColor: "rgba(0,0,0,0.5)"}}/> 
            </TouchableWithoutFeedback>
  
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Avalie este produto</Text>
                {error && <Text style={{color: 'red'}}>{errorMessage}</Text>}
              <TextInput 
                style={styles.modalInput}
                placeholder="Digite aqui sua avaliação"
                onChangeText={text => setReview(text)}
                value={review}
                multiline={true}/>
  
              <View style={styles.modalAditionalContainer}>
  
                <View style={{marginRight: "auto", marginLeft: 8}}>
                  <Text style={styles.modalCaption}>Deslize para avaliar</Text>
                  <Rating 
                    imageSize={30}
                    fractions={5}
                    style={{height: 50, paddingTop: 8}}
                    onFinishRating={rating => setGrade(rating)}
                  />
                </View>
                {/* <View style={{marginRight: "auto", justifyContent: "center", alignItems: "center"}}>
                  <Text style={styles.modalCaption}>Nota do produto</Text>
                  <TextInput 
                    value={grade}
                    onChangeText={text => setGrade(text)}
                    keyboardType="number-pad"
                    style={styles.scoreInput}
                    placeholder="Ex. 4.2 (máx 5)"
                  />
                </View> */}
  
                <View style={{ justifyContent: "center", alignItems: "flex-start"}}>
                  <Text style={styles.modalCaption}>Loja onde foi comprado</Text>
                  <Picker
                    selectedValue={selectedShop}
                    style={{height: 50, width: 200, backgroundColor: "#f9f9f9", borderRadius: 8}}
                    onValueChange={(item) => setSelectedShop(item)}>
                    <Picker.Item label="Lojas Americanas" value="AMER"/>
                    <Picker.Item label="Submarino" value="SUBM"/>
                    <Picker.Item label="Magazine Luiza" value="MAGA"/>
                    <Picker.Item label="Casas Bahia" value="CASA"/>
                    <Picker.Item label="Kaboom!" value="KABO"/>
                  </Picker>
                </View>
  
              </View>
  
              <TouchableOpacity style={styles.modalButton} onPress={handleSubmitReview}> 
                <Text style={styles.modalButtonText}>ENVIAR</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> 
              <View style={{flex: 0.5, backgroundColor: "rgba(0,0,0,0.5)"}}/> 
            </TouchableWithoutFeedback>
          </View>
  
        </Modal>
  
        <View style={styles.productContainer}>
  
          <View style={styles.headerBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={26} color="#fff"/>
            </TouchableOpacity>
          </View>
  
          <View style={{backgroundColor: "#fff"}}>
            <Image style={styles.productImage} source={{uri: route.params.image}}/>
          </View>
          <Text style={styles.productTitle}>{route.params.title}</Text>
          <View style={styles.aditionalInfo}>
            <Text style={styles.productType}>{route.params.type}</Text>
            {/* <View style={{flexDirection: "row", alignItems: "center"}}>
              <FontAwesome name="star" size={16} color="#fff"/>
              <Text style={styles.productScore}>4.2</Text>
            </View> */}
          </View>
        </View>
  
        <View style={styles.reviewContainer}>
          <Text style={{marginLeft: 16, marginTop: 8, fontSize: 20, fontWeight: "bold"}}>Avaliações de outros compradores</Text>
          <Text style={styles.orderBy}>Ordenar por: Relevância</Text>
  
          <FlatList 
            data={reviews}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Review id={item.id} ranking={false} product={route.params.title} likes={item.likes} name={item.author.username} shop={item.formated_store[1]} review={item.description} grade={parseFloat(item.grade)}/>}
            keyExtractor={item => String(item.id)}
            horizontal={true}
          />
          
        </View>
  
        <View style={styles.doReviewContainer}>
          <Text style={styles.hasExperience}>Tem alguma experiência com este produto?</Text>
          <TouchableOpacity style={styles.reviewButton} onPress={handleOpenModal}>
            <Text style={styles.buttonText}>AVALIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
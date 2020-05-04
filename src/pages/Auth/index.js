import React, {useState, useEffect} from 'react'
import {AsyncStorage, View, Text, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native'

import {Feather} from '@expo/vector-icons'

import Header from '../../components/Header'
import Loading from '../../components/Loading'

import styles from './styles'
import commonStyles from '../../commonStyles'

import api from '../../services/api'

export default function Auth({ navigation, route }){

  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('Login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [visiblePassword, setVisiblePassword] = useState(false)

  async function loginUser(){
    try {
      const data = {
        username,
        password
      }

      const response = await api.post('/users/token-login/', data);
      console.log(response.data.token)

      return response.data.token

    } catch(err){
      console.err(err)
    }
  }

  async function setupProfile(token){
    await AsyncStorage.removeItem('profile')

    const response = await api.get('/users/self', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    const profile = {
      id: response.data.id,
      username: response.data.username,
      score: response.data.profile.score,
      points: response.data.profile.points,
      is_premium: response.data.profile.is_premium
    }

    await AsyncStorage.setItem('profile', JSON.stringify(profile))
  }

  async function handleSubmitLogin(){
    if(!username || !password){
      setError(true)
      setErrorMessage('Preencha todos os campos')
    } else {
      setLoading(true)
      setError(false)

      const token = await loginUser()
      await AsyncStorage.setItem('token', token)
      await setupProfile(token)
      setLoading(false)
      navigation.navigate('Home')
    }
  }

  async function registerUser(){
    try {
      const data = {
        username,
        password,
        profile: {
          phone: phone.trim(),
          email
        }
      }

      const response = await api.post('/users/', data);
      console.log(response.data.message)

    } catch(err) {
      console.error(err)
    }
  }

  async function handleSubmitRegister(){
    if(!username || !email || !phone || !password || !confirmPassword){
      setError(true)
      setErrorMessage('Preencha todos os campos')
    }
    else if(password !== confirmPassword){
      setError(true)
      setErrorMessage('As senhas não coincidem')
    }
    else if(password.length > 16){
      setError(true)
      setErrorMessage('A senha deve possuir no máximo 16 caracteres')
    } 
    else if(password.length < 8){
      setError(true)
      setErrorMessage('A senha deve possuir no mínimo 8 caracteres')
    } 
    else if(phone.length < 10 || phone.length > 12){
      setError(true)
      setErrorMessage('Digite um telefone válido')
    } else if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
      setError(true)
      setErrorMessage('Digite um email válido')
    } else {
      setLoading(true)
      setError(false)

      await registerUser()

      setType('Confirmação')
      setLoading(false)
    }
  }

  async function handleConfirmation(){

    try {
      setLoading(true)
      const data = {
        token: confirmation
      }

      const response = await api.post('/users/authenticate-email/', data)
      console.log(response.data.message)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }

    setType('Login')
  }

  function handleSwitchType(){
    type === 'Login' ? setType('Cadastro') : setType('Login')
    setError(false)
  }

  useEffect(() => {
    setType(route.params.type)
  }, [route.params.type])

  if(loading){
    return (
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>

        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>{type}</Text>
        </View>

        <Loading />
      </View>
    )
  } 
  else if(type === 'Login'){
    return (
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>
  
        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>{type}</Text>
        </View>
  
        {error &&
          <Text style={styles.error}>{errorMessage}</Text>
        }

        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Nome de usuário</Text>
            <TextInput 
              placeholder="Ex. josedasilva"
              style={styles.textField}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
  
          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Senha</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <TextInput
                secureTextEntry={!visiblePassword}
                style={styles.passwordField} 
                placeholder="8 a 16 caracteres"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity style={{marginLeft: 8}} onPress={() => setVisiblePassword(!visiblePassword)}>
                <Feather name={!visiblePassword ? 'eye' : 'eye-off'} size={32}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  
        <TouchableOpacity onPress={handleSwitchType}>
          <Text style={styles.register}>Não possuo cadastro</Text>
        </TouchableOpacity>
        <Text>ou</Text>
        <TouchableOpacity onPress={() => setType('Confirmação')}>
          <Text style={[styles.register, {marginTop: 0}]}>Confirmar registro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={handleSubmitLogin}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    )
  } else if(type === 'Cadastro'){
    return (
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>
  
        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>{type}</Text>
        </View>

        {error &&
          <Text style={styles.error}>{errorMessage}</Text>
        }
  
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Nome de usuário</Text>
            <TextInput 
              placeholder="Ex. josedasilva"
              style={styles.textField}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
  
          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Email</Text>
            <TextInput
              placeholder="Ex. josedasilva@gmail.com"
              keyboardType="email-address"
              style={styles.textField} 
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Telefone</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.textField} 
              value={phone}
              placeholder="Digite apenas números"
              onChangeText={text => setPhone(text)}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Senha</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <TextInput
                secureTextEntry={!visiblePassword}
                style={styles.passwordField} 
                placeholder="8 a 16 caracteres"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity style={{marginLeft: 8}} onPress={() => setVisiblePassword(!visiblePassword)}>
                <Feather name={!visiblePassword ? 'eye' : 'eye-off'} size={32}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Confirmar senha</Text>
            <TextInput
              secureTextEntry={!visiblePassword}
              style={styles.textField} 
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>

        </View>
  
        <TouchableOpacity onPress={handleSwitchType}>
          <Text style={styles.register}>Já possuo cadastro</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header icon="menu" onPress={() => navigation.openDrawer()}/>
  
        <View style={commonStyles.titleContainer}>
          <Text style={commonStyles.title}>{type}</Text>
        </View>

        {error &&
          <Text style={styles.error}>{errorMessage}</Text>
        }
  
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.fieldInfo}>Digite o código de confirmação</Text>
            <Text style={{marginBottom: 8}}>Foi enviado pra o seu email.</Text>
            <TextInput 
              style={styles.textField}
              value={confirmation}
              onChangeText={text => setConfirmation(text)}
            />
          </View>
        </View>
  
        <TouchableHighlight style={styles.button} onPress={handleConfirmation}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableHighlight>
      </View>
    )
  }
  
}
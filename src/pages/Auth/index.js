import React, {useState, useEffect} from 'react'
import {AsyncStorage, View, Text, TextInput, TouchableOpacity} from 'react-native'

import {Feather} from '@expo/vector-icons'

import Header from '../../components/Header'

import styles from './styles'
import commonStyles from '../../commonStyles'

export default function Auth({ navigation, route }){

  const [type, setType] = useState('Login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [visiblePassword, setVisiblePassword] = useState(false)

  async function handleSubmitLogin(){
    if(!username || !password){
      setError(true)
      setErrorMessage('Preencha todos os campos')
    } else {
      setError(false)
      await AsyncStorage.setItem('token', '123')
      navigation.goBack()
    }
  }

  function handleSubmitRegister(){
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
      setError(false)
    }
  }

  function handleSwitchType(){
    type === 'Login' ? setType('Cadastro') : setType('Login')
    setError(false)
  }

  useEffect(() => {
    setType(route.params.type)
  }, [])

  if(type === 'Login'){
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

        <TouchableOpacity style={styles.button} onPress={handleSubmitLogin}>
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
  }
  
}
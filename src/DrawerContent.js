import React, { useState, useEffect } from 'react'

import { View, StyleSheet, AsyncStorage, Text, TouchableOpacity, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper'

import commonStyles from './commonStyles'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

function LoginContainer({ token, onLogin, onRegister, username, points }){

    if(token !== null){
        return (
            <View style={{flexDirection: "row", marginTop: 15}}>
                <Avatar.Image 
                    source={{
                        uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                    }}
                    size={70}
                />
                <View style={{marginLeft: 15, flexDirection: "column"}}>
                    <Title style={styles.title}>{username}</Title>
                    <Caption style={styles.caption}>Pontuação: {points}</Caption>
                </View>
            </View>
        )
    } else {
        return(
            <View style={{padding:8}}>
                <Text style={{fontSize: 18, color:"#fff", marginTop: 8, fontWeight: "bold"}}>Bem vindo!</Text>

                <View style={{flexDirection: "row", marginTop: 15}}>
                    <TouchableOpacity style={{
                        backgroundColor: "#fff",
                        padding: 8,
                        borderRadius: 8,
                        marginRight: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }} onPress={onLogin}>
                        <Text style={{fontWeight: "bold"}}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: "#fff",
                        padding: 8,
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }} onPress={onRegister}>
                        <Text style={{fontWeight: "bold"}}>CADASTRO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default function DrawerContent(props) {

    const [token, setToken] = useState(null)
    const [username, setUsername] = useState('')
    const [points, setPoints] = useState('')
    const [score, setScore] = useState('')

    async function loadStats(){
        const profile = await AsyncStorage.getItem('profile')
        const profileJson =  JSON.parse(profile)

        setUsername(profileJson.username)
        setPoints(profileJson.points)
        setScore(profileJson.score)
    }

    useEffect(() => {
        if(token) {
            loadStats()
        }
        setInterval(async () => {
            setToken(await AsyncStorage.getItem('token'))
        }, 1000)
    })

    function handleContact() {
        MailComposer.composeAsync({
            subject: "Ajuda com o Checa Aqui",
            recipients: ["megahacktime39@gmail.com"],
            body: "Olá! Preciso de ajuda com o aplicativo Checa Aqui"
        })
    }

    async function handleLogin(){
        props.navigation.navigate('Auth', {type: 'Login'})
    }

    async function handleRegister(){
        props.navigation.navigate('Auth', {type: 'Cadastro'})
    }

    async function handleLogout() {
        const value = await AsyncStorage.getItem('token')
        if(value !== null){
            await AsyncStorage.setItem('token', null)
            const profile = {
                id: 0,
                username: '',
                score: '',
                points: '',
                is_premium: false
              }
          
              await AsyncStorage.setItem('profile', JSON.stringify(profile))
            setToken(null)
        } else {
            Alert.alert('Erro', 'Você precisa fazer login primeiro.')
        }
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <LoginContainer token={token} onLogin={handleLogin} onRegister={handleRegister} username={username} points={points}/>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Início"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                    name="user"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Meu perfil"
                            onPress={() => {
                                if(token){
                                    props.navigation.navigate('Profile', {username: username, mine: true})
                                } else {
                                    handleLogin()
                                }    
                            }}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                    name="award"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Ranking"
                            onPress={() => {props.navigation.navigate('Ranking')}}
                        />
                        <DrawerItem 
                            unmountOnBlur={true}    
                            icon={({color, size}) => (
                                <Feather 
                                    name="clock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Histórico"
                            onPress={() => {props.navigation.navigate('History', {refresh: true})}}
                        />
                    </Drawer.Section>
                                
                    <Drawer.Section title="Ajuda">
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                    name="help-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sobre nós"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                    name="phone"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contato"
                            onPress={handleContact}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {token && 
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Feather 
                                name="log-out"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sair"
                        onPress={handleLogout}
                    />
                </Drawer.Section>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      backgroundColor: "#000",
      paddingBottom: 16,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      marginTop: 16,

      backgroundColor: commonStyles.colors.primary,

      borderRadius: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    title: {
      fontSize: 18,
      marginTop: 8,
      fontWeight: 'bold',
      color: "#fff"
    },
    caption: {
      fontSize: 16,
      lineHeight: 16,
      color: "#eee"
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
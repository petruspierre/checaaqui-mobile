import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

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

export default function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: "row", marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                                }}
                                size={70}
                            />
                            <View style={{marginLeft: 15, flexDirection: "column"}}>
                                <Title style={styles.title}>Petrus Pierre</Title>
                                <Caption style={styles.caption}>Pontuação: 120</Caption>
                            </View>
                        </View>
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
                            onPress={() => {props.navigation.navigate('Profile', {name: "Petrus Pierre", mine: true})}}
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
                            icon={({color, size}) => (
                                <Feather 
                                    name="clock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Histórico"
                            onPress={() => {}}
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
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
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
                    onPress={() => {}}
                />
            </Drawer.Section>
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
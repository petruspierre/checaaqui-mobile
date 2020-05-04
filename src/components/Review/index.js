import React, { useState } from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import commonStyles from '../../commonStyles'

import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

export default function Review(props) {

    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(props.likes)

    const navigation = useNavigation()

    function handleContact(){
        navigation.navigate('Profile', { username: props.name, mine: false, ranking: false, product: props.product })
    }

    async function handleLike(){

        const token = await AsyncStorage.getItem('token')

        setLiked(!liked)
        setLikes(likes + 1)

        const response = await api.post(`/reviews/${props.id}/like/`, {}, {
            headers: {
                Authorization: `Token ${token}`
            }
        })


        console.log(response.data)
    }

    if(!props.profile){
        return (
            <View style={styles.container}>
                <View style={styles.profileInfo}>
                    <View style={styles.bordinhaImagem}>
                        <Image style={styles.profileImage} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}} />
                    </View>
                    <View style={{justifyContent: "center"}}>
                        <Text style={styles.nameProfile}>{props.name}</Text>
                        <Text style={styles.shopProfile}>{props.shop}</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: "auto"}}>
                        <Feather name="star" />
                        <Text style={{marginLeft: 8, fontSize: 16}}>{props.grade}</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.reviewText}>{props.review}</Text>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={handleContact}>
                        <Text style={styles.textButton}>Fale com {props.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.like} onPress={handleLike}>
                        <Text style={{fontSize: 20, marginRight: 6}}>{likes}</Text>
                        <Feather name="heart" size={20} color={liked ? '#f33' : "#000"}/>
                    </TouchableOpacity>
                </View>
            </View>
        ) 
    } else {
        return (
            <View style={styles.containerProfile}>
                <View style={styles.profileInfo}>
                    <View style={styles.bordinhaImagem}>
                        <Image style={styles.profileImage} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}} />
                    </View>
                    <View style={{justifyContent: "center"}}>
                        <Text style={styles.nameProfile}>{props.name}</Text>
                        <Text style={styles.shopProfile}>{props.shop}</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.reviewText}>{props.review}</Text>
                </ScrollView>
            </View>
        )
    }

}
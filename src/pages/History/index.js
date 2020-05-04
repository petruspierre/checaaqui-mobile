import React, { useState, useEffect } from 'react'

import {
    TouchableOpacity,
    View,
    Text,
    AsyncStorage,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native'

import Header from '../../components/Header'
import Attendance from '../../components/Attendance'
import AttendanceClient from '../../components/AttendanceClient'
import Loading from '../../components/Loading'

import styles from './styles'
import commonStyles from '../../commonStyles'

import api from '../../services/api'

export default function History({navigation, route}) {

    const [attendancesAsClient, setAttendancesAsClient] = useState([])
    const [attendancesAsAttendant, setAttendancesAsAttendant] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [grade, setGrade] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [selectedId, setSelectedId] = useState(0)
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('client')
    const [refreshClient, setRefreshClient] = useState(false)
    const [refreshAttendant, setRefreshAttendant] = useState(false)
    const [showMode, setShowMode] = useState('cliente')
    const [inverseShowMode, setInverseShowMode] = useState('atendente')

    async function getAttendancesAsClient(){

        setLoading(true)
        const token = await AsyncStorage.getItem('token')

        console.log(token)

        const response = await api.get('/attendance/client/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })

        setAttendancesAsClient(response.data.results)

        console.log(response.data)

    }

    async function getAttendancesAttendant(){

        const token = await AsyncStorage.getItem('token')

        console.log(token)

        const response = await api.get('/attendance/attendant', {
            headers: {
                Authorization: `Token ${token}`
            }
        })

        setAttendancesAsAttendant(response.data.results)

        console.log(response.data)

        setLoading(false)

    }

    async function handleEvaluate() {

        if(!grade) {
            setError(true)
            setErrorMessage("Dê uma nota")
        } else {
            setError(false)

            const data = {
                score: parseFloat(grade.replace(',','.'))
            }

            
            const token = await AsyncStorage.getItem('token')
            console.log(data)
            
            if(type === 'client'){
                const response = await api.put(`attendance/${selectedId}/client-avaliate/`, data, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                console.log(response.data)
            } else {
                const response = await api.put(`attendance/${selectedId}/attendant-avaliate/`, data, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                console.log(response.data)
            }
    
            setModalVisible(false)
        }
        getAttendancesAsClient()
        getAttendancesAttendant()
    }

    function handleChangeShowMode(){
        if(showMode === 'cliente') {
            setShowMode('atendente')
            setInverseShowMode('cliente')
        } else {
            setShowMode('cliente')
            setInverseShowMode('atendente')
        }
    }

    useEffect(() => {
        setType('')
        setAttendancesAsClient([])
        setAttendancesAsAttendant([])
        getAttendancesAsClient()
        getAttendancesAttendant()
    }, [])

    if(loading){
        return(
            <View style={styles.container}>
                <Header icon="menu" onPress={() => navigation.openDrawer()}/>
        
                <View style={commonStyles.titleContainer}>
                    <Text style={commonStyles.title}>Histórico</Text>
                </View>
                <Loading />
            </View>
        )
    }
    else {
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
                            <Text style={styles.title}>Avalie este atendimento</Text>
                            {error && <Text style={{color:'red', marginBottom: 16}}>{errorMessage}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Ex.: 4.6 (máx 5)"
                                keyboardType="number-pad" 
                                value={grade}
                                onChangeText={text => setGrade(text)} />
                            <TouchableOpacity style={styles.modalButton} onPress={handleEvaluate}>
                                <Text style={styles.modalButtonText}>AVALIAR</Text>
                            </TouchableOpacity>
                        </View>
    
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> 
                            <View style={{flex: 0.5, backgroundColor: "rgba(0,0,0,0.5)"}}/> 
                        </TouchableWithoutFeedback>
                    </View>
    
                </Modal>
    
                <Header icon="menu" onPress={() => navigation.openDrawer()}/>
    
                <View style={commonStyles.titleContainer}>
                    <Text style={commonStyles.title}>Histórico</Text>
                </View>

                <Text style={{fontSize: 22}}>Atendimentos como {showMode}</Text>

                <TouchableOpacity style={{marginVertical: 8}} onPress={handleChangeShowMode}>
                    <Text style={{color: commonStyles.colors.primary}}>Mudar para atendimentos como {inverseShowMode}</Text>
                </TouchableOpacity>

                {showMode === 'cliente' && 
                <FlatList 
                onRefresh={() => {
                    setRefreshClient(true)
                    getAttendancesAsClient()
                    getAttendancesAttendant()
                    setRefreshClient(false)
                }}
                refreshing={refreshClient}
                data={attendancesAsClient}
                renderItem={({item}) => 
                    <AttendanceClient 
                        id={item.id} 
                        client={item.client.username} 
                        attendantWasEvaluated={item.attendant_was_evaluated}
                        product={item.product}
                        createdAt={item.created_at}
                        onPress={() => {
                            setSelectedId(item.id)
                            setError(false)
                            setModalVisible(true)
                            setType('client')
                            setGrade('')
                        }}
                        attendant={false}
                        attendantScore={item.attendant_score}/>}
                keyExtractor={(item) => String(item.id)}
                />}
                {showMode === 'atendente' &&  
                <FlatList 
                    onRefresh={() => {
                        setRefreshClient(true)
                        getAttendancesAsClient()
                        getAttendancesAttendant()
                        setRefreshClient(false)
                    }}
                    refreshing={refreshClient}
                    data={attendancesAsAttendant}
                    renderItem={({item}) => 
                        <Attendance 
                            id={item.id} 
                            client={item.client.username}
                            attendant={item.attendant.username}  
                            attendantWasEvaluated={item.attendant_was_evaluated}
                            product={item.product}
                            createdAt={item.created_at}
                            onPress={() => {
                                setSelectedId(item.id)
                                setError(false)
                                setModalVisible(true)
                                setType('attendant')
                                setGrade('')
                            }}
                            attendant={true}
                            clientScore={item.client_score}/>}
                    keyExtractor={(item) => String(item.id)}
                    />}
                
            </View>
        )
    }
}
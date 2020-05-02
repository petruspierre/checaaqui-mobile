import {StyleSheet, Dimensions} from 'react-native'

import Constants from 'expo-constants'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#fff"
    },
    titleContainer: {
        width: Dimensions.get('window').width - 32,
    
        marginTop: 8,
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
        padding: 16,
    
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
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
    },
})
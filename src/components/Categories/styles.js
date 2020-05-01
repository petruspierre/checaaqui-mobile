import {StyleSheet, Dimensions} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2 - 64,
        height: Dimensions.get('window').width / 2 - 64,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,

        marginTop: 16,
    },
    image: {
        width: Dimensions.get('window').width / 3 - 72,
        height: Dimensions.get('window').width / 3 - 72
    },
    title: {
        marginTop: 8,
        fontWeight: "bold",
        fontSize: 14,
        color: "#333"
    }
})
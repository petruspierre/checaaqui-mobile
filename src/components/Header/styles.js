import {StyleSheet, Dimensions} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 70,
        width: 150,
        resizeMode: "center"
    },
    icon: {
        position: "absolute",
        top: 12,
        left: 16,
    }
})
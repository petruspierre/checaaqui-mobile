import {StyleSheet, Dimensions} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        padding: 8,
        marginTop:16,
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: Dimensions.get('window').width - 32,

        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
    },
    title: {
        width: Dimensions.get('window').width - 180,
        fontSize: 20,
    }
})
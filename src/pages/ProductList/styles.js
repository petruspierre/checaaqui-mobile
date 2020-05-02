import {StyleSheet, Dimensions} from 'react-native'

import Constants from 'expo-constants'

export default styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#fff"
    },
    back: {
        position: "relative",
        marginTop: 8,
        marginLeft: 16,
        marginRight: "auto"
    },
})
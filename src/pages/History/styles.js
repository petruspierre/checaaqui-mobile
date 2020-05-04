import { StyleSheet, Dimensions } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        marginTop: commonStyles.metrics.statusBar,
    },
    modalContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        height: 50,
        width: Dimensions.get('window').width - 32,
        padding: 8,
        backgroundColor: "#f9f9f9",
        fontSize: 16,
        textAlign: "center",
    
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
      modalButton:{
        width: Dimensions.get('window').width - 32,
        padding: 16,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      },
      modalButtonText:{
        color: "white", 
        fontWeight: "bold",
        fontSize: 20,
        textAlignVertical: "center",
      },
})
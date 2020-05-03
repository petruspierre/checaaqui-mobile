import { StyleSheet, Dimensions } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: commonStyles.metrics.statusBar,
    justifyContent: "center",
    alignItems: "center",
  },

  headerBar: {
    position: "absolute",
    height: 40,
    zIndex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    paddingLeft: 8,
    backgroundColor: "rgba(9, 32, 96, 0.5)"
  },

  productContainer: {
    width: Dimensions.get("window").width,
    paddingBottom: 8,

    marginBottom: 8,

    backgroundColor: commonStyles.colors.secondary,
    
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  productImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3.5,
    resizeMode: "center",
  },
  productTitle: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 24,
    color: "white",
    // textAlign: "justify"
    //fontFamily: commonStyles.fontFamily
  },
  aditionalInfo: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  productType: {
    fontSize: 16,
    color: "#eee"
  },  
  productScore: {
    marginLeft: 5,
    fontSize: 16,
    color: "#eee"
  },


  reviewContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    // paddingLeft: 32,
    // paddingRight: 32,
    // paddingTop: 16,
    // paddingBottom: 32,
  },
  orderBy: {
    color: "#666",
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 8,
  },

  doReviewContainer: {
    backgroundColor: "#f9f9f9",
    paddingTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 32,
    borderRadius: 16,
  },
  hasExperience: {
    fontSize: 18,
    fontWeight: "bold",
  },
  reviewButton: {
    marginVertical: 8,
    width: 180,
    height: 50,
    backgroundColor: commonStyles.colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white", 
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
  },



  modalContainer: {
    backgroundColor: "#fff",
    flex:1.1,
    padding: 16,
    // justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  modalInput: {
    padding: 8,
    backgroundColor: "#f9f9f9",
    flex: 1,
    fontSize: 18,

    width: Dimensions.get('window').width - 32,
    margin: 16,
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
  },
  modalButtonText:{
    color: "white", 
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
  }
  
})
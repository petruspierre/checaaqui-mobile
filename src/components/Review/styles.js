import { StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,

    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 8,
  },
  profileInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
  },
  bordinhaImagem: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,

    backgroundColor: commonStyles.colors.primary,
    height: 66,
    width: 66,
    borderRadius: 33,

    marginRight: 16,
  },    
  profileImage: {
      height: 60,
      width: 60,
      borderRadius: 30,
      resizeMode: "cover",
      marginRight: 8
  },
  nameProfile: {
      fontWeight: "bold",
      fontSize: 20
  },
  shopProfile: {
    fontSize: 18,
    color:"#333"
  },
  reviewText: {
      marginTop: 8,
      fontSize: 20,
      color:"#555",
      textAlign: "justify"
  },
  button: {
      paddingTop: 6,
      justifyContent: "center",
      alignItems: "center",
      marginTop: "auto",
  },
  textButton: {
      fontSize: 20,
      color: commonStyles.colors.light
  }
})
import { StyleSheet, Dimensions } from 'react-native'

import Constants from 'expo-constants'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#fff",
    marginTop: Constants.statusBarHeight,
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
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    width: Dimensions.get('window').width - 32,
    backgroundColor: '#f9f9f9',
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
  },
  userImage: {
    height: 64,
    width: 64,
    borderRadius: 35,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold"
  },
  userScore: {
    fontSize: 18,
  }
})
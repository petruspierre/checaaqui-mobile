import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
  },
  menuIcon: {
    position: "absolute",
    top: 5,
    left: 10
  },
  header: {
    alignItems: "center",
    width: Dimensions.get('window').width - 32,
    marginTop: 8,
    //height: Dimensions.get('window').height / 3,
    backgroundColor: commonStyles.colors.light,

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
  headerCheck: {
    marginTop: 16,
    marginLeft: 64,
    width: Dimensions.get('window').width,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16
  },
  title: {
    color: commonStyles.colors.primary,
    marginTop: 8,
    fontSize: 24
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    padding: 8,
    backgroundColor: "#ddd",
    flex: 1,
    height: 50,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputContainer: {
    marginTop: 16,
    marginBottom: 32,
    marginRight: 64,
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 50 - (Dimensions.get("window").width - 100),
    height: Dimensions.get("window").width - 50 - (Dimensions.get("window").width - 100),
    backgroundColor: commonStyles.colors.secondary
  },


  categoriesContainer: {
    width: Dimensions.get("window").width - 32,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  }
})
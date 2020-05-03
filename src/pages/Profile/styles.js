import { StyleSheet, Dimensions } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: commonStyles.metrics.statusBar,
    fontFamily: commonStyles.fontFamily,
    backgroundColor: "#fff"
  },
  back: {
    position: "absolute",
    top: 8,
    left: 16
  },
  logo: {
    fontSize: 22,
    marginTop: 12,
    color: commonStyles.colors.primary,
    fontWeight: "bold",
  },
  header: {
    width: Dimensions.get('window').width - 32,

    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    padding: 24,

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
  bordinha: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    width: Dimensions.get('window').width - 140,
    textAlign: "center",
  },
  score: {
    fontSize: 18,
    color:"#eee",
    width: Dimensions.get('window').width - 140,
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
    width: Dimensions.get('window').width - 32,
    marginTop: 16,

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
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: commonStyles.colors.primary
  },
  reviewTitle: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: "bold",
  }
})
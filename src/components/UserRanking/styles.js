import { StyleSheet, Dimensions } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#fff",
    marginTop: commonStyles.metrics.statusBar,
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
    marginLeft: 8,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})
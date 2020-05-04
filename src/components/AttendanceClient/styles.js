import {StyleSheet, Dimensions} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get('window').width - 32,
    backgroundColor: '#f9f9f9',
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  caption: {
    fontSize: 18
  },
})
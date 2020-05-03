import { StyleSheet, Dimensions } from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: commonStyles.metrics.statusBar,
    backgroundColor: '#fff'
  },
  formContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    width: Dimensions.get('window').width - 32,

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
  error: {
    marginTop: 8,
    color: 'red'
  },
  fieldInfo: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
  },
  field: {

  },
  textField: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
  },
  passwordField: {
    width: Dimensions.get('window').width - 108,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
  },
  register: {
    marginTop: 16,
    color: commonStyles.colors.secondary
  },
  button: {
    marginTop: 16,
    width: Dimensions.get('window').width - 128,
    backgroundColor: commonStyles.colors.primary,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,

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
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  }
})
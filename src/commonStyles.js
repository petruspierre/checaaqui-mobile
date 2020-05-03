import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default {
  colors: {
    primary: '#122d77',
    secondary: '#1f3e93',
    dark: '#041543',
    semidark: '#092060',
    light: '#3d579e',
  },
  metrics: {
    padding: 15,
    margin: 15,
    statusBar: Constants.statusBarHeight
  },
  titleContainer: {
    width: Dimensions.get('window').width - 32,

    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
    padding: 16,

    backgroundColor: '#122d77',

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
  fontFamily: 'Tauri'
}
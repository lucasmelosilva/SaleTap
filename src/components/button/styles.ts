import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../constants/colorsTheme'

export const styles = StyleSheet.create({
  buttonForm: {
    padding: 15,
    backgroundColor: ColorTheme.darkTeal,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#F1F1f1',
    fontSize: 18
  }
})
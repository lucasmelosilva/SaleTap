import { StyleSheet } from 'react-native'

import { ColorTheme } from '../../constants/colorsTheme'

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: ColorTheme.darkTeal,
  },

  formLogin: {
    backgroundColor: ColorTheme.mintGreen,
    flexGrow: 1,
    justifyContent: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingHorizontal: 25,
    paddingBottom: 50,
    gap: 20
  }
})

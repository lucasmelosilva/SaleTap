import { StyleSheet } from 'react-native'

import { ColorTheme } from '../../constants/colorsTheme'

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: ColorTheme.darkTeal,
  },

  bundle: {
    flexGrow: 4/6,
    justifyContent: 'center',
    alignItems: 'center'
  },


  bundleImage: {
    flexDirection: 'row'
  },
  
  title: {
    fontSize: 18,
    color: '#F1F1F1',
    fontWeight: 'bold',
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
  },

  formInput: {
    padding: 15,
    fontSize: 18,
    backgroundColor: '#F1F1F1',
    color: '#000',
    borderRadius: 10
  }, 

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

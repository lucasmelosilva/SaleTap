import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../constants/colorsTheme';

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: ColorTheme.mintGreen,
    gap: 20,
    paddingHorizontal: 25,
    paddingTop: 25
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
   
  form: {
    flexGrow: 1,
    gap: 18
  }
})
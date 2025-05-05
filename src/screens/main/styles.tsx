import { StyleSheet, StatusBar } from 'react-native'

import { isAndroid } from '../../utils/isAndroid'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid() ? StatusBar.currentHeight : 0,
    backgroundColor: '#F1F1F1',
  }
})

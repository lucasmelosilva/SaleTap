import { SafeAreaView } from 'react-native' 

import { styles } from './styles' 
import { Login } from '../login'

export const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  )
}
import { SafeAreaView, StatusBar, Text, View } from 'react-native' 

import { styles } from './styles' 

export const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello, world</Text>
      </View>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}
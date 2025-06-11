import { Image, Text, View } from 'react-native'

import { styles } from './styles'

export const Bundle = () => {
  return (
    <View style={styles.bundle}>
      <Image
        source={require('../../../assets/saletap.png')}
        style={{ width: 250, height: 200 }}
      />
      <Text style={styles.title}>A vitrine do seu negócio na palma da mão.</Text>
    </View>
  )
}
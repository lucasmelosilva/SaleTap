import { Image, View, TouchableOpacity, Text } from "react-native"
import { styles } from './styles'

interface ImgCloseButtonProps {
  image: string
  removeImage: () => void
}

export const ImgCloseButton = ({image, removeImage}: ImgCloseButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={removeImage} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.image}/>
    </View>
  )
}


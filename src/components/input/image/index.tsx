import { Button, StyleSheet, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { ImgCloseButton } from '../../img-close-button'

interface ImageInputProps {
  onImageSelected?: (image: any | null) => void
}

export const ImageInput = ({ onImageSelected }: ImageInputProps) => {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      onImageSelected?.(result.assets[0])
    }
  }

  const removeImage = () => {
    setImage(null)
    onImageSelected?.(null)
  }

  return (
    <View style={styles.container}>
      {image &&
        <ImgCloseButton image={image} removeImage={removeImage}/>
      }

      <Button title='Selecione uma imagem' onPress={async () => {
        await pickImage()
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  }
});
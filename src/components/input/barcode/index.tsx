import { Text, TextInput, View } from 'react-native'

import { styles } from './styles'

interface ScannerInput {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  onFocus: () => void
  onBlur: () => void
  title: string
}

export const ScannerInput = ({
  title,
  value,
  placeholder,
  onBlur,
  onFocus,
  onChangeText,
}: ScannerInput) => {
  return (

    <View style={styles.content}>
      <Text style={styles.contentLabel}>
        {title}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#959595"
        value={value}
        onChangeText={(text) => onChangeText(text)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  )
}
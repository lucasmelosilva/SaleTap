import { TextInput } from 'react-native'

import { styles } from './styles'

interface InputProps {
  placeholder: string,
  value: any
  func: (something: any) => any
}

export const InputPassword = ({placeholder, value, func}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#959595"
      secureTextEntry
      value={value}
      onChangeText={text => func(text)}
    />
  )
}
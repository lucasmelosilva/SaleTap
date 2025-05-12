import { TextInput } from 'react-native'

import { styles } from './styles'

interface InputProps {
  placeholder: string,
  value: any
  func: (something: any) => any
}

export const Input = ({placeholder, value, func}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      placeholderTextColor="#959595"
      onChangeText={text => func(text)}
      editable={true}
      keyboardType='default'
    />
  )
}
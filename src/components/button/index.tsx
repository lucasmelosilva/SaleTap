import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
  title: string,
  disable: boolean
  handle: () => any
}

export const Button = ({handle, title, disable}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonForm}
      onPress={handle}
      disabled={disable}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
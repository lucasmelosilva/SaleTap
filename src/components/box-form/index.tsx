import { Text, View } from 'react-native'
import { Input } from '../input'

interface BoxFormProps {
  title: string
  placeholder: string
  value: string
  func: (text: any) => any
}

export const BoxForm = ({ title, func, placeholder, value}: BoxFormProps) => {
  return (
    <View>
      <Text>
        {title}
      </Text>
      <Input func={func}
        placeholder={placeholder}
        value={value} />
    </View >
  )
}
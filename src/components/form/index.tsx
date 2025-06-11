import { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface FormProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export const Form = (props: FormProps) => {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  )
}
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { styles } from './styles'
import { useState } from 'react'
import { isAndroid } from '../../utils/isAndroid'

export const Login = () => {
  const [employerId, setEmployerId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log(`enviado para API os dados nesse formato { employerId: ${employerId}, password: ${password} }`)
  }

  const isDisable = (): boolean => {
    return employerId.length === 0 && password.length === 0
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior={isAndroid() ? 'height': 'padding'}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.bundle}>
            <Image
              source={require('../../../assets/saletap.png')}
              style={{ width: 250, height: 200 }}
            />
            <Text style={styles.title}>A vitrine do seu negócio na palma da mão.</Text>
          </View>

          <View style={styles.formLogin}>

            <TextInput
              style={styles.formInput}
              placeholder="Matrícula"
              value={employerId}
              onChangeText={text => setEmployerId(text)}
              editable={true}
              keyboardType='default'
            />
            <TextInput
              style={styles.formInput}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.buttonForm}
              onPress={handleSubmit}
              disabled={isDisable()}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
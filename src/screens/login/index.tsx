import { View, } from 'react-native'

import { styles } from './styles'
import { useState } from 'react'
import { MainContainer } from '../../components/main-container'
import { Bundle } from '../../components/bundle'
import { Input } from '../../components/input'
import { InputPassword } from '../../components/input/password'
import { Form } from '../../components/form'
import { Button } from '../../components/button'

export const Login = () => {
  const [employerId, setEmployerId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log(`enviado para API os dados nesse formato { employerId: ${employerId}, password: ${password} }`)
  }

  const isDisable = (): boolean => {
    return employerId.length === 0 || password.length === 0
  }

  return (
    <MainContainer>
      <View style={styles.container}>
        <Bundle />
        <Form style={styles.formLogin}>
          <Input func={setEmployerId} placeholder='matricula' value={employerId} />

          <InputPassword func={setPassword} placeholder='Senha' value={password} />

          <Button disable={isDisable()} handle={handleSubmit} title='Entrar'/>
        </Form>

      </View>
    </MainContainer>
  )
}
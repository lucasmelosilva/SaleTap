import { Form } from '../../components/form'
import { Button } from '../../components/button'
import { useState } from 'react'
import { MainContainer } from '../../components/main-container'

import { EmployerModel } from '../../models/employerModel'
import { BoxForm } from '../../components/box-form'
import Dropdown from 'react-native-input-select'

import { styles } from './styles'
import { Text, View } from 'react-native'

export const SignUp = () => {
  const [employerModelSubmit, setEmployerModelSubmit] = useState({
    name: '',
    employerId: '',
    password: '',
    passwordConfirmation: '',
    role: ''
  })

  const handleNewEmployer = () => {
    console.log('employer Model:', employerModelSubmit)
  }

  return (
    <MainContainer>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Novo Funcionário</Text>

        <Form style={styles.form}>
          {
            Object.entries(EmployerModel).map(([objectName, objectValue], key) => {
              return (
                <BoxForm
                  key={key}
                  title={objectValue.title}
                  placeholder={objectValue.placeholder}
                  value={employerModelSubmit[objectName as keyof typeof employerModelSubmit]}
                  func={(text) => setEmployerModelSubmit({ ...employerModelSubmit, [objectName]: text })} />
              )
            })
          }

          <Dropdown
            label='Função:'
            placeholder='Selecione um das opções'
            options={[
              { label: 'Caixa', value: 'cashier' },
              { label: 'Gerente', value: 'manager' }
            ]}
            selectedValue={employerModelSubmit['role']}
            onValueChange={(value) => setEmployerModelSubmit({ ...employerModelSubmit, role: value as string })}
            labelStyle={{
              color: '#000', fontSize: 15,
              fontWeight: 'semibold'
            }}
            dropdownStyle={{backgroundColor: '#F1F1F1', borderColor: '#F1F1F1'}}
          />

          <Button disable={false} title='Catasdrar' handle={handleNewEmployer} />
        </Form>
      </View>
    </MainContainer>
  )
}
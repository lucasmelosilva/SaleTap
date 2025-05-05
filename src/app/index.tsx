import { StatusBar } from 'react-native'
import { Main } from '../screens/main'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <Main />
    </>
  )
}

export default App
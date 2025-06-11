import { CameraView, useCameraPermissions } from "expo-camera"
import { useEffect, useRef, useState } from "react"
import { Alert, Button, Modal, View } from "react-native"

interface CameraProps {
  handleBarcodeScanned: (data: string) => void
  onFocusBarcodeInput: boolean,
  handleCloseCamera: () => void

}

export const Camera = ({onFocusBarcodeInput, handleBarcodeScanned, handleCloseCamera}: CameraProps) => {
  const [permission, requestPermission] = useCameraPermissions()
  const barCodeReadLock = useRef(false)

  useEffect(() => {
    requestPermission().then(
      granted => {
        if (!granted){
          return Alert.alert('Camera', 'Você precisa habilitar o uso da camera.')
        }
      }
    )
  }, [])

  return (
    <Modal visible={onFocusBarcodeInput}  style={{flex: 1}}>
      <CameraView 
        style={{flex: 1}}
        facing="back"
        onBarcodeScanned={({data}) => {
          if (data && !barCodeReadLock.current) {
            barCodeReadLock.current = true
            setTimeout(() => {
              handleBarcodeScanned(data)
            }, 500)
          }
        }}
        barcodeScannerSettings={{barcodeTypes: ["ean13", "ean8", "upc_a"]}}
      />

      <View>
        <Button title="Cancelar" onPress={handleCloseCamera}/>
      </View>
    </Modal>
  )
}
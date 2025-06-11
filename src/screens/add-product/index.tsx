import { Form } from '../../components/form'
import { Button } from '../../components/button'
import { useState } from 'react'
import { MainContainer } from '../../components/main-container'

import { ProductFormSchema } from '../../formSchemas/productFormSchema'
import { BoxForm } from '../../components/box-form'

import { styles } from './styles'
import { Text, View } from 'react-native'
import { ImageInput } from '../../components/input/image'
import { Camera } from '../../components/camera'
import { ScannerInput } from '../../components/input/barcode'

export const AddProduct = () => {
  const [productFormSubmit, setProductFormSubmit] = useState({
    name: '',
    barCode: '',
    image: null as any, // Use 'any' type for image to avoid type issues
    price: ''
  })

  // Função para verificar se todos os campos estão vazios ou nulos
  const isProductFormEmpty = () => {
    return (
      (!productFormSubmit.name || productFormSubmit.name.trim() === '') &&
      (!productFormSubmit.barCode || productFormSubmit.barCode.trim() === '') &&
      (!productFormSubmit.price || productFormSubmit.price.trim() === '') &&
      (productFormSubmit.image == null)
    )
  }
  const [barcodeOnFocus, setBarcodeOnFocus] = useState(false);

  const handleBarcodeInputFocus = () => setBarcodeOnFocus(true);
  const handleBarcodeInputBlur = () => setBarcodeOnFocus(false);
  const handleCloseCamera = () => setBarcodeOnFocus(false);

  const handleBarcodeScanned = (data: string) => {
    setProductFormSubmit((prevState) => ({
      ...prevState,
      barCode: data
    }));
    setBarcodeOnFocus(false); // Fecha a câmera
  }


  const handleImageSelected = (image: any | null) => {
    setProductFormSubmit({ ...productFormSubmit, image })
  }

  const handleNewProduct = async () => {
    console.log('Submitting new product:', productFormSubmit)
    const formData = new FormData()

    formData.append('name', productFormSubmit.name);
    formData.append('barCode', productFormSubmit.barCode);
    formData.append('price', productFormSubmit.price);

    if (productFormSubmit.image) {
      const imageURI = productFormSubmit?.image.uri
      const imageName = imageURI.split('/').pop() || 'image.jpg'
      const match = /\.(\w+)$/.exec(imageName ?? '');
      const type = match ? `image/${match[1]}` : `image`;

      formData.append('image', {
        uri: imageURI,
        name: imageName,
        type // Adjust the type based on your image format
      } as any)
    }

    try {
      console.log('Try to make request\nForm data prepared:', formData)
      const response = await fetch('http://192.168.0.5:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      })


      if (response) {
        console.log('Response status:', response.status)
      }
      const data = await response.json()
      console.log('Form submitted successfully:', data)
    }
    catch (error) {
      console.error('Error submitting form:', error)
    }

  }

  return (
    <MainContainer>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Novo Produto</Text>

        <Camera
          handleBarcodeScanned={handleBarcodeScanned}
          onFocusBarcodeInput={barcodeOnFocus}
          handleCloseCamera={handleCloseCamera}
        />

        <Form style={styles.form}>

          <View>
            <ImageInput onImageSelected={handleImageSelected} />
          </View>

          {
            Object.entries(ProductFormSchema).map(([objectName, objectValue], key) => {
              if (objectName === 'image') {
                return null
              }

              if (objectName === 'barCode') {
                return (
                  <ScannerInput
                    key={key}
                    title={objectValue.title}
                    placeholder={objectValue.placeholder}
                    value={productFormSubmit[objectName as keyof typeof productFormSubmit] ?? ''}
                    onChangeText={(text) => setProductFormSubmit({ ...productFormSubmit, [objectName]: text })}
                    onFocus={handleBarcodeInputFocus}
                    onBlur={handleBarcodeInputBlur}
                  />
                )
              }

              return (
                <BoxForm
                  key={key}
                  title={objectValue.title}
                  placeholder={objectValue.placeholder}
                  value={productFormSubmit[objectName as keyof typeof productFormSubmit] ?? ''}
                  func={(text) => setProductFormSubmit({ ...productFormSubmit, [objectName]: text })} />
              )
            })
          }

          <Button disable={isProductFormEmpty()} title='Cadastrar' handle={handleNewProduct} />
        </Form>
      </View>
    </MainContainer>
  )
}
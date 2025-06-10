import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container :{
    position: 'relative',
  } , 

  closeButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#d30d0d',
    padding: 10,
    borderRadius: "50%",
    zIndex: 1,
  },

  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  image: {
    marginBottom: 10,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
})

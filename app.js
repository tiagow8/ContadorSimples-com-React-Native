import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

// function useState(inicial){
//   return[inicial, function(){console.log('chamou')}]
// }

export default () => {

  const [contador, setContador] = useState(0)

  // let contador = 0

  // function setContador(count){
  //   contador = count
  //   console.log(contador)
  // }

  return(
    <View style={ Estilo.container }> 

      <View style={ Estilo.logoContainer }> 
        <Image source={ require('./assets/logo-contador.png') } 
             style={ Estilo.img }
        />
      </View>

      <Text style={ Estilo.text }> 
        { contador }
      </Text>

      <Button title='+'  
              color='#673ab7'
              onPress={ () => setContador(contador + 1) }
      />

      <Button title='-'
              color='#e91e63'
              onPress= {() => contador > 0 ? setContador(contador - 1) : 
              false}
      />


    
    </View>
  )

}

const Estilo = StyleSheet.create({
  img: {
    width: 150,
    height: 150
  },
  text: {
    fontSize: 80,
    textAlign: 'center',
    color: '#fff'
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#1f1f1f'
  },
  logoContainer:{
    alignItems: 'center'
  }
})
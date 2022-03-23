import React from 'react'
import {View , Text, ImageBackground} from 'react-native'
import Button from '../Button/Button'
import Style from './Style'
function CarItem(props) {
  const {name , tagline , image} = props.car;
  
  return (
    <View style={Style.cardContainer}>

      <ImageBackground source={image} style={Style.img} />

      <View style={Style.textContainer}>
          <Text style={Style.title}>{name}</Text>
          <Text style={Style.subtitle}>{tagline}</Text>
      </View>
      <View style={Style.buttonContainer}>

      
      <Button type="primery" content="Custom Ouder" onpress={ ()=> console.warn("Custom Alpha") }/>
      <Button type="secondary" content="Existing Invertory" onpress={ ()=> console.warn("Existint Inventory") }/>
      </View>
    </View>
  )
}

export default CarItem;

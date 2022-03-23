import React from 'react'
import Style from './style'
import {View , Text, Pressable} from 'react-native'

function Button( props ) {
    
    const type = props.type;
    const content = props.content;
    const press = props.onpress;
    


    const backgroundColor = type === 'primery' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primery' ? '#FFFFFF' : '#171A20';
    
  return (
        <View style={Style.Container}>
            <Pressable  style={[Style.btn , {backgroundColor}]} onPress={()=> press()}>
                <Text style={[Style.text , {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
  )
}

export default Button

import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    textContainer:{
        marginTop: '30%',
        alignItems: 'center'
    },
    title:{
        fontSize: 40,
        fontWeight: '600'
    },
    subtitle:{
        fontSize: 16,
        color: '#5c5e65'
    },
    img:{
        width: '100%',
        height: '100%', 
        position: 'absolute',
        resizeMode: 'cover'
    },
    buttonContainer:{
        bottom: 50,
        position: 'absolute',
        width: '100%'
    }
})

export default styles;

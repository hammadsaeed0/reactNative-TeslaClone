import { StatusBar } from 'expo-status-bar';
import CarItem from './Components/CarItems/CarItem'
import Button from './Components/Button/Button'
import {StyleSheet, View, FlatList, Dimensions} from 'react-native'
import car from './assets/cars'

export default function App() {
  
  return (
    <View style={styles.container}>
              
     <FlatList 
     data={car}
     renderItem={({item})=> <CarItem  car={item}/> }
     snapToAlignment={'start'}
     showsVerticalScrollIndicator={false}
     decelerationRate={'fast'}
     snapToInterval={Dimensions.get('window').height}
     />
          
             <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  
});

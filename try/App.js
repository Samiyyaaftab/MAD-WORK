import SearchField from './components/SearchField'; //import SearchField from components/SearchField

import Field from './components/Field';//import Field from components/Field
import {  Text,View ,StyleSheet} from 'react-native'; //import StyleSheet, Text, View from react native

import Boxes from './components/Boxes';//import  Boxes from components/ Boxes

export default function App() {
    return (
      /* Main container */
        <View style={styles.container}> 
         {/* search text*/}
         <SearchField searchText='Search the codition doctors...'></SearchField>
            {/* header text*/}
          <Field headerText='Lets find your doctor'> </Field>
          {/* doctor boxes*/}
          <View style={styles.box}> 
          <Boxes name='Dr.John Smith' specialization='Dermatologist'></Boxes>
          
          <Boxes name='Dr.Anna.Din' specialization='Dermatologist'></Boxes>
          
          </View>
          <View style={styles.doc}>
          <Boxes name='Dr.John Smith' specialization='Dermatologist'></Boxes>
          <Boxes name='Dr.Anna.Din' specialization='Dermatologist'></Boxes>
          </View>
          
        </View>
         
    );
}

const styles = StyleSheet.create({
  // main container style for  complete UI
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',

    paddingLeft: 10,
    paddingRight:6,
    paddingTop: 50,
    
  },
 // styling for first 2 box
box:{
  flexDirection:'row',
  justifyContent:'space-around',
  
},
 // styling for second 2 box
doc:{
  flexDirection:'row',
  justifyContent:'space-around',
},
});

import { Text ,View,StyleSheet } from "react-native";
import Icon from'react-native-vector-icons/FontAwesome';
// Funtion allow to be  imported in another file
//props used  for accesing data from other components
export default function Rating(props){
    return (
       //container for rating
            <View style={styles.rating}>
      <Icon name="star" size={13} color="red"></Icon>{/* Add star icon in rating box  */}
      <Text style={styles.ratingText}>{props.ratingText}</Text>{/* Add text in rating box */}
      
      </View>

    
    );
}
const styles = StyleSheet.create({
    //styling for rating box
    rating:
  {
    backgroundColor:'blue',
    width:48,
    height:22,
    borderRadius:10,
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:3,
  },
//styling for rating Text
    ratingText:{
        color: 'white', 
        fontSize: 13, 
        paddingLeft:2,
        
    
      },
    
        });
            
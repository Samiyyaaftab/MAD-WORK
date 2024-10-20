import { Text ,View,StyleSheet } from "react-native";
import Rating from "./Rating";
import Icon from'react-native-vector-icons/FontAwesome';
// Funtion allow to be  imported in another file
//props used  for accesing data from other components
export default function Boxes(props){
    return (
         //Main boxes container
        <View style={styles.Boxes}>
              <Icon name="user-md" size={55} color="blue"></Icon>
              {/* text container for text*/}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.name}</Text>
               
                <Text style={styles.specialization}>{props.specialization}</Text>
            </View>
            <Rating ratingText ='4.9'></Rating>
        </View>
    
    );
}
const styles = StyleSheet.create({
    //boxes overall styling
    Boxes:
    {
        alignItems:'center',
        backgroundColor:'white',
        width:165,
        height:190,
        marginBottom: 20,
        borderRadius:20,
        borderWidth:2,
        borderColor:'snow',
        paddingTop:17,
   
    },
     //doctor name  styling
    name:{
      color: 'black', 
      fontWeight:'bold',
      fontSize:18,
      textAlign:'center',


    },
    //doctor specialization styling
    specialization:{
        color: 'gray', // Set the color  for 'Dermatologist'
        fontSize: 12, 
        textAlign:'center',
        marginBottom:10,


    },
   
        });
            
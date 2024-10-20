
import { Text, View ,StyleSheet} from 'react-native'; //import StyleSheet, Text, View from react native
import Icon from'react-native-vector-icons/FontAwesome';//importing icon from react-native-vector
// Funtion allow to be  imported in another file
//props used  for accesing data from other components
export default function SearchField(props) {
    return (
        //searchField container 
        <View style={styles.search}>
        <Icon name="search" size={20} color="gray"></Icon>
         <Text style={styles.searchText} >{props.searchText}</Text>
         
        </View>
    );

}
const styles = StyleSheet.create({
//search styling
search:
{
    backgroundColor:'white',
    width:375,
    height:40,
    borderRadius:10,
    borderWidth:2,
    borderColor:'snow',
    marginBottom: 20,
    flexDirection:'row',//item align horzentally 
    alignItems:'center',
    paddingLeft:10,


},
//search text styling
searchText:{
    paddingTop: 1,
    paddingLeft: 9,
    textAlign: 'left',
    fontSize: 15,
    color:'gray',
},
});
    
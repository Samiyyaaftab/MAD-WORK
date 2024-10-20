import { Text, View ,StyleSheet} from 'react-native';
// Funtion allow to be  imported in another file
//props used  for accesing data from other components
export default function Field(props) {
    return (
        //Main header container
        <View style={styles.header}>
       

      <Text style={styles.headerText} >{props.headerText}</Text>
      
        </View>
    );
}
const styles = StyleSheet.create({
    //styling for header
header:
{

    alignItems:'left',
},
//styling for headerText
    headerText:
    {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft:13,
        marginBottom: 15,
    
    
    
    },
    });
        
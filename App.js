import { View, Text, SafeAreaView, StyleSheet ,StatusBar} from 'react-native'
import React from 'react'


const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
     <StatusBar style='auto'/>
        <View style={styles.search}>
         <Text> search here</Text>
        </View>
        <View style={styles.list}> 
        <Text>Miain List</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
  },
  search:
  {
    padding:12,
    height:'5%',
    width:'100%',
    backgroundColor:'yellow'

  },
  list:{
   flex:1,
   backgroundColor:'tomato'
  }

})
export default App
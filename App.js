import { View, Text, SafeAreaView, BackHandler } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.maincontiner}>
        <View style={styles.container}>
         <Text>Hello search here</Text>
        </View>
        <View style={styles.main}> 
        <Text>Miain contenet</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    height:'30%',
    width:'100%'
  },
  main:{
    flex:1,
    backgroundcolour:'yellow'
  }

})
export default App
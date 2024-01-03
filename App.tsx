import React, { Children } from 'react';
import {ScrollView, Text, View, Image, TextInput, StyleSheet, FlatList, SectionList} from 'react-native';
import Cat from './src/component/Cat';
import PizzaTranslator from './src/component/PizzaTranslator';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white'
  },
  sectionHeader:{
    paddingVertical: 2, 
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

const data = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]

const sections = [
  {
    title: 'D', data: ['Devin', 'Dan', 'Dominic']
  },
  {
    title: 'J', data: ['Jackson','James','Jillian','Jimmy','Joel','John','Julie'],
  }
]

const App = ()=>{


  return(
    // <View>
    //   <Cat name='Mom'></Cat>
    //   <Cat name='Meo'></Cat>

    //   <PizzaTranslator/>
    // </View>
    <View style={styles.container}>
      {/* <FlatList
        data={data}
        renderItem={child => <Text style={styles.item}>{child.item.key}</Text>}
      /> */}

      <SectionList
      
        sections={sections}
        renderItem={child => <Text style={styles.item}>{child.item}</Text>}
        renderSectionHeader={child => <Text style={styles.sectionHeader}>{child.section.title}</Text> }
        keyExtractor={item => {
          console.log(`basicListEntry-${item}`);
          return `basicListEntry-${item}`
        }}
      />
    </View>
  )
}
export default App;
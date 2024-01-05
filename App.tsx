import React, { Children, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, StyleSheet, FlatList, SectionList } from 'react-native';
import Cat from './src/component/Cat';
import PizzaTranslator from './src/component/PizzaTranslator';
import PreviewLayout from './src/component/PreviewLayout';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white'
  },
  sectionHeader: {
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
  },
  box:{
    width: 50,
    height: 50
  }
})

const data = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
]

const sections = [
  {
    title: 'D', data: ['Devin', 'Dan', 'Dominic']
  },
  {
    title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  }
]

const App = () => {

  const [selectedValue, setSelectedValue] = useState<string>('column');


  return (
    // <View>
    //   <Cat name='Mom'></Cat>
    //   <Cat name='Meo'></Cat>

    //   <PizzaTranslator/>
    // </View>
    // <View style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={child => <Text style={styles.item}>{child.item.key}</Text>}
    //   />

    //   <SectionList
      
    //     sections={sections}
    //     renderItem={child => <Text style={styles.item}>{child.item}</Text>}
    //     renderSectionHeader={child => <Text style={styles.sectionHeader}>{child.section.title}</Text> }
    //     keyExtractor={item => {
    //       console.log(`basicListEntry-${item}`);
    //       return `basicListEntry-${item}`
    //     }}
    //   />

    //   <View style={{ height: 50, width: 50, backgroundColor: 'powderblue' }} />  
    //   <View style={{ height: 100, width: 100, backgroundColor: 'skyblue' }} />  

    //   <View style={{ height: 150, width: 150, backgroundColor: 'steelblue' }} />  

    // </View>
    // <View style={{flex: 1}}>
    //   <View style={{flex:1, backgroundColor: 'powderblue'}}/>  
    //   <View style={{flex:2, backgroundColor: 'skyblue'}}/>  
    //   <View style={{flex:3, backgroundColor: 'steelblue'}}/>  



    // </View>

    // <View style={{height: '100%'}}>
    // <View style={{height: '15%', backgroundColor: 'powderblue'}}/>  
    // <View style={{height: '35%', width:'66%', flex:2, backgroundColor: 'skyblue'}}/>  
    // <View style={{height: '50%', width: '33%', flex:3, backgroundColor: 'steelblue'}}/>  



  // </View>

  <View style={{flex: 1}}>
    <PreviewLayout label={'flexDirection'} values={['column', 'row', 'row-reverse', 'column-reverse']} selectedValue={selectedValue} setSelectedValue={setSelectedValue}>
      <View style={[styles.box, {backgroundColor: 'red'}]}></View>
      <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
      <View style={[styles.box, {backgroundColor: 'green'}]}></View>

    </PreviewLayout>

  </View>
  )
}
export default App;
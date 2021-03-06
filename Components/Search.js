// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import film from '../Helpers/filmData'
import { getFilmsFromApiWithSearchedText } from "../API/Api";

class Search extends React.Component {
  // Components/Search.js


  render() {
    console.log('Hi');
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Rechercher" onPress={() => {}} />
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          //data={[{key:'a'},{key:'b'}]}
          data={film}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default Search;

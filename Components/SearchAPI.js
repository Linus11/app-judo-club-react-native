// Components/Search.js
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from "react-native";
import films from "../Helpers/filmData";
import FilmItem from "../Components/FilmItem";
// import { } from ... car c'est un export nommé dans TMDBApi.js
import { getFilmsFromApiWithSearchedText } from "../API/Api.js";
import { getDataFromSql } from "../API/sqlApi.js";
import Names from '../Components/Names'

class SearchAPI extends React.Component {
  // Components/Search.js
  constructor(props) {
    super(props)
    this.state = {films: []}
    this.state = {comptes: []}
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
      this._films = data.results
      console.log(data)
      this.setState({ films: data.results })
      
    })
 }
 _dataBase() {
    getDataFromSql().then(data => {
      this._comptes = data.results
      console.log(data)
      this.setState({ comptes: data.results })
    })
 }

  render() {
      
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Rechercher Film with Api" onPress={() => this._loadFilms()} />

        <Button title="Rechercher comptes with Api" onPress={() => this._dataBase()} />

        <FlatList
          data={this._films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
        <FlatList
          data={this._comptes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Names compte={item} />}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});
export default SearchAPI;

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Names extends React.Component {
  // Components/FilmItem.js

render() {
    const compte = this.props.compte
    console.log("states Comp Name")
    return (
      <View style={styles.main_container}>
        
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{compte.email}</Text>
            <Text style={styles.vote_text}>{compte.name}</Text>
            <Text style={styles.vote_text}>{compte.password}</Text>
          </View>
        </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {
    
  }
})

export default Names
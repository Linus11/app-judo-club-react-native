import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from '../../styles/styles.js'
import { ScrollView } from 'react-native-gesture-handler';

const Screen2 = () =>
<ScrollView>
  <View style={styles.center}>
    <Text style={styles.title}>Quiz Favorites</Text>
    <View style={styles.main_container}>
      <Image
            style={styles.image}
            source={{uri: "http://www.mobdesign.fr/Api/images/1.jpg"}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>Bases</Text>
              <Text style={styles.vote_text}>***..</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>Testez vos connaissances de base en judo, culture générale et mise en situation...</Text>
            
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Dernier test le 16/06/2020</Text>
            </View>
          </View>
        </View>

        <View style={styles.main_container}>
      <Image
            style={styles.image}
            source={{uri: "http://www.mobdesign.fr/Api/images/2.jpg"}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>Grade 2 : Ceinture jaune</Text>
              <Text style={styles.vote_text}>***..</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>Préparez votre passage de ceinture jaune</Text>
            
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Dernier test le 10/05/2020</Text>
            </View>
          </View>
        </View>

        <View style={styles.main_container}>
      <Image
            style={styles.image}
            source={{uri: "http://www.mobdesign.fr/Api/images/3.jpg"}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>Grade supérieur : 1ère dan</Text>
              <Text style={styles.vote_text}>***..</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>Vous souhaitez passer le cap vers un dan supérieur</Text>
            
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Dernier test le 22/05/2020</Text>
            </View>
          </View>
        </View>
    
  </View>
</ScrollView>

export default Screen2;
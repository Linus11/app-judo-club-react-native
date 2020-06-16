import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { BackgroundCarousel }  from '../../../Components/BackgroundCarousel'

import { styles } from '../../styles/styles.js'

const images = [
  "http://www.mobdesign.fr/Api/images/1.jpg",
  "http://www.mobdesign.fr/Api/images/2.jpg",
  "http://www.mobdesign.fr/Api/images/3.jpg",
  "http://www.mobdesign.fr/Api/images/4.jpg",
];
const Screen3 = () =>
  <View style={styles.center}>

    <Text style={styles.title}>Carousel</Text>
    <BackgroundCarousel images={images} />

  </View>

export default Screen3;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

const Screen1 = () =>
  <View style={styles.center}>
    <Text style={styles.title}>Contacts</Text>
    <Text>Judo Club de Rhinau</Text>
    <Text>Adresse : 20 Rue du Cygne,</Text>
    <Text> 67860 Rhinau</Text>
    <Text>Téléphone : 06 65 16 65 61</Text>

  </View>

export default Screen1;
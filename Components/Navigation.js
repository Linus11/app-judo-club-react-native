import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Contact extends React.Component {
    static navigationOptions = {
        title: 'Contact',
      };
      render() {
        const {navigate} = this.props.navigation;
          return(
            <Button
            title="Contact"
            onPress={() => navigate('Contact', {name: 'Contact'})}
          />
          )
      }
}
import React from 'react';
import { View } from 'react-native';

export default class Connexion extends React.Component { 
 render() {
     return(
         <View>
             <Button
        title="Connexion"
        onPress={() => navigate('Connexion', {name: 'Connexion'})}
      />
         </View>
     );
 }
}
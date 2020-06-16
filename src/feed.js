import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Traitement  from '../Components/Traitement'

import { styles } from './styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const Feed = () => {

  const navigation = useNavigation();
  const route = useRoute();

  let detailResult = route.params;
  return (
    <ScrollView>
    <View style={styles.center}>
      <Text style={styles.title}>
        {detailResult ? detailResult.data : 'Authentification'}
      </Text>
      

      {
        Platform.select({
          ios:
            <Button
              title='Go to Feed Item'
              onPress={() => navigation.navigate('Detail', { screenName: "My Detail Screen" })}
            />,
          android:
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { screenName: "My Detail Screen" })}>
              <Text style={styles.androidButtonText}>S'authentifier ?</Text>
            </TouchableOpacity>
        })
      }
      <View>
        <Traitement />
      </View>
    </View>
    </ScrollView>
    
  );
}

export default Feed;
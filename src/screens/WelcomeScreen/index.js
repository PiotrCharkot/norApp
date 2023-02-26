import { View, Text, StyleSheet} from 'react-native'
import React, {useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import MaskedView from '@react-native-community/masked-view';

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const moveToMain = () => {
        navigation.replace("Main");
    }

    useEffect(() => {
      
        setTimeout(() => {
            moveToMain();
            
        }, 300);

    }, [])
    

  return (
    <MaskedView
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            App Name
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
    </MaskedView>
  )
}

const style = StyleSheet.create({
    mainContainer: {
        marginTop: 100, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WelcomeScreen
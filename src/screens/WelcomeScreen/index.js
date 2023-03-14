import { View, Text, StyleSheet, Image, Dimensions, Animated} from 'react-native'
import React, {useEffect, useRef } from 'react'
import { useNavigation } from "@react-navigation/native";
import MaskedView from '@react-native-community/masked-view';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const opacityFront = useRef(new Animated.Value(1)).current;
    const opacityText = useRef(new Animated.Value(1)).current;


    const moveToMain = () => {
      navigation.replace("Main");
    }

    useEffect(() => {
      

      Animated.timing(opacityFront, {
        duration: 2000,
        delay: 0,
        toValue: 0,
        useNativeDriver: true
      }).start()

      Animated.timing(opacityText, {
        duration: 2000,
        delay: 2000,
        toValue: 0,
        useNativeDriver: true
      }).start()


      setTimeout(() => {
          moveToMain();
          
      }, 300);

    }, [])
    

  return (
    <View style={styles.mainContainer}>
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <Animated.View
          style={{
            backgroundColor: 'rgba(0, 255, 0, 0)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            

            <Animated.Text style={{...styles.logoText, opacity: opacityText,}}>
              Lær norsk
            </Animated.Text>
          
          </Animated.View>
        }
        >
        <View style={styles.backgroundContainer}>

          <Image style={styles.pictureFlag} source={(require('../../../assets/norskFlag.png'))} />
        </View>
        
      </MaskedView>
      <Animated.Image style={{...styles.pictureFlagTop, opacity: opacityFront}} source={(require('../../../assets/norskFlag.png'))} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%', 
    backgroundColor: 'white',
  },
  maskedView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  backgroundContainer: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  pictureFlag: {
    height: screenWidth * 0.6  ,
    width: screenWidth ,
    marginBottom: 0
  },
  pictureFlagTop: {
    position: 'absolute',
    top: screenHeight / 2 - screenWidth * 0.6 / 2,
    height: screenWidth * 0.6  ,
    width: screenWidth ,
    marginBottom: 0,
  },
  logoText: {
    fontSize: 80,
    color: 'black',
    fontWeight: 'bold',
    opacity: 1
  },
  
})

export default WelcomeScreen
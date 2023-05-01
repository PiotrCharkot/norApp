import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { Audio } from "expo-av";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 2;


const Class1x1x2 = ({route}) => {

    const {userPoints, latestScreen, comeBackRoute, allScreensNum} = route.params
    
    console.log('points 2nd screen: ' , userPoints );
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
    const [comeBack, setComeBack] = useState(false);


    const playSound = async () => {
        
      console.log('play sound å');
      const { sound: playbackObject } = await Audio.Sound.createAsync(
          { uri: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Faa.mp3?alt=media&token=c8b73f09-ecf0-4917-ae52-1306d9dd8476' },
          { shouldPlay: true }
        );
  }

    
    useFocusEffect(() => {
        
      if (latestScreen > currentScreen) {
          setLatestScreenDone(latestScreen);
          setComeBack(true);
      }

      if (route.params.userPoints > 0) {
          console.log('setting new points', route.params.userPoints );
          setCurrentPoints(userPoints)
      }

    })

  return (
    <View style={styles.mainContainer}>
      <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>

          <View style={styles.textContainer}>
              <Text style={styles.text}>The base form of a verb is a verb with no changes and letter <Text style={styles.boldText}>'å'</Text> in front of it. For example the verb 'to help' is going to look like this: </Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>å hjelpe</Text>
          </View>

          <View style={styles.textContainer}>
              <Text style={styles.text}>This is pronunciation of letter 'å'.</Text>
          </View>

          <View style={styles.pictureContainer}>
            <TouchableOpacity onPress={playSound}>
              <Image style={styles.pictureSound} source={require('../../../../../../assets/volume.png')} />
            </TouchableOpacity>
          </View>
          
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        linkNext={'Class1x1x3'}
        linkPrevious={'Class1x1x1'}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        comeBack={comeBack}
        allScreensNum={allScreensNum}
        />
      </View>
    </View>
  )
}

export default Class1x1x2

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: generalStyles.backgroundColorLearnScreen
  },
  head: {},
  body: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20
  },
  questionText: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '400',
  },
  boldText: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '700'
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  exampleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: 6
  },
  exampleText: {
    fontSize: generalStyles.exampleTextSize,
    fontWeight: generalStyles.exampleTextWeight,
  },
  pictureContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureSound: {
    height: 100,
    width: 100,
    tintColor: 'purple'
  }
  
})
import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 1;
const allScreensNum = 10;

const Class1x1x1 = ({route}) => {
  
  const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [comeBack, setComeBack] = useState(false);



  useFocusEffect(() => {
    if (route.params) {
      const {userPoints, latestScreen, comeBackRoute} = route.params;
      
      if (latestScreen > currentScreen) {
        setLatestScreenDone(latestScreen);
        setComeBack(true)
      } 

      if (route.params.userPoints > 0) {
        setCurrentPoints(userPoints)
    }
    }
    
  })


  return (
    <View style={styles.mainContainer}>
      <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBack}/>
        <View style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Present tense - Presens</Text>
          </View>

          <View style={styles.middleView}>
            <Text style={styles.text}>
            Hello there! Today, we're diving into the <Text style={styles.textColor}>present tense</Text> in Norwegian language. It is the most used time in Norwegian. It's also one of the simplest to master! {'\n\n'}This tense is used to indicate actions, events, or states happening right now.
            </Text>

            
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x1x2'} 
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        isFirstScreen={true}
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

export default Class1x1x1

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
  topView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  middleView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: generalStyles.learningScreenTitleSize,
    fontWeight: generalStyles.learningScreenTitleFontWeight,
    marginVertical: 10,
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
  },
  textColor: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    color: '#6441A5',
    fontWeight: '500'
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
})
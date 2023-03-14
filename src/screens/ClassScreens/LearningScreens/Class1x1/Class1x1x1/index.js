import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 1;

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
      <ProgressBar screenNum={currentScreen} totalLenghtNum={9} latestScreen={latestScreenDone} comeBack={comeBack}/>
        <View style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Presens - present time</Text>
          </View>

          <View style={styles.middleView}>
            <Text style={styles.text}>
            In this class we are going to learn about present time. It is the most used time in norwegian language. It is also the easiest to learn.
            </Text>

            
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x1x2'} 
        buttonWidth={45}
        buttonHeight={45}
        isFirstScreen={true}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        comeBack={comeBack}
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
    fontWeight: '400',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
})
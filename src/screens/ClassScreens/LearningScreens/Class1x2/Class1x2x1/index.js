import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { getAuth } from 'firebase/auth';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 1;   //current screen
const allScreensNum = 9;   //screens number

const Class1x2x1 = ({route}) => {   //name 


  const auth = getAuth();
  const user = auth.currentUser;
  
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
            <Text style={styles.title}>Future tense - Presens futurum</Text>
          </View>

          <View style={styles.middleView}>
            <Text style={styles.textGreeting}>
              Hei{user.isAnonymous ? <Text style={styles.textName}></Text> : <Text style={styles.textName}> {user.displayName}</Text>}!
            </Text>
            <Text style={styles.text}>
            We'll talk now about the future tense in Norwegian language. {'\n\n'}We often come across the term 'presens futurum' or just 'futurum'. It's the way to express things, events, or states set to occur in future.
            </Text>

            
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x2x2'} //link to next screen
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

export default Class1x2x1 // name for export

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
  textGreeting: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    marginBottom: 20
  },
  textName: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '600',
    color: '#cf5eff'
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
})
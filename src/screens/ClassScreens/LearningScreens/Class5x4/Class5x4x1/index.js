import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { getAuth } from 'firebase/auth';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 1;   //current screen
const allScreensNum = 8;   //screens number

const Class5x4x1 = ({route}) => {   //name 

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Degree of comparison - Gradbøyning</Text>
          </View>

          <View style={styles.middleView}>
            <Text style={styles.textGreeting}>
            God dag{user.isAnonymous ? <Text style={styles.textName}></Text> : <Text style={styles.textName}> {user.displayName}</Text>}!
            </Text>
            <Text style={styles.text}><Text style={styles.textColor}></Text><Text style={styles.textColor}>Gradbøyning</Text> refers to the inflection of adjectives and adverbs to express different <Text style={styles.textColor}>degrees of comparison</Text>. {'\n\n'}There are three <Text style={styles.textColor}>degrees of comparison</Text>: {'\n\n'}- positive, {'\n'}- comparative, {'\n'}- superlative
            </Text>

            
          </View>
        </ScrollView>
    
        <View style={styles.progressBarContainer}>
          <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBack}/>

        </View>

        <View style={styles.bottomBarContainer}>
          <BottomBar 
          linkNext={'Class5x4x2'} //link to next screen
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

export default Class5x4x1 // name for export

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: generalStyles.backgroundColorLearnScreen
  },
  head: {},
  body: {
    height: '100%',
    width: '100%',
    marginTop: generalStyles.marginTopBody,
    marginBottom: generalStyles.marginBottomBody,
  },
  progressBarContainer: {
    width: '100%',
    position: 'absolute',
  },
  topView: {
    marginTop: generalStyles.marginTopTopView,
    marginBottom: generalStyles.marginBottomTopView,
    marginHorizontal: generalStyles. marginHorizontalTopView
  },
  middleView: {
    marginTop: generalStyles.marginTopMiddleView,
    marginBottom: generalStyles.marginBottomMiddleView,
    marginHorizontal: generalStyles. marginHorizontalMiddleView
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
    color: generalStyles.colorText1,
    fontWeight: generalStyles.textColorFontWeight
  },
  textGreeting: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    marginBottom: 20
  },
  textName: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.textNameFontWeight,
    color: generalStyles.colorTextName
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: generalStyles.bottomBarDistFromBottom,
    width: '100%',
  },
  
})
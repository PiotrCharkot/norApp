import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 0;  //current screen



const Class1x1x5 = ({route}) => { // name

  
    const {userPoints,  latestScreen, comeBackRoute, allScreensNum} = route.params
    
    

    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
    const [comeBack, setComeBack] = useState(false);


    useFocusEffect(() => {
        if (latestScreen > currentScreen) {
            setLatestScreenDone(latestScreen);
            setComeBack(true)
        } 

        if (route.params.userPoints > 0) {
            setCurrentPoints(userPoints)
        }
    })


  return (
    <View style={styles.mainContainer}> 
      <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>First part of text <Text style={styles.textColor}>Colored word in text</Text> Second part of text  <Text style={styles.boldText}>Bold part of text</Text> Last part of text. </Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Example bold<Text style={styles.exampleTextSmallColor}>color part</Text> Example bold</Text>
            <Text style={styles.textSmall}>Example bottom </Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Example bold<Text style={styles.exampleTextSmallColor}>color part</Text> Example bold</Text>
            <Text style={styles.textSmall}>Example bottom</Text>
          </View>
          
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Example bold<Text style={styles.exampleTextSmallColor}>color part</Text> Example bold</Text>
            <Text style={styles.textSmall}>Example bottom</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Example bold<Text style={styles.exampleTextSmallColor}>color part</Text> Example bold</Text>
            <Text style={styles.textSmall}>Example bottom</Text>
          </View>

        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class?x?x?'} //link to next screen
        linkPrevious={'Class?x?x?'}  //link to previous screen
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
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

export default Class1x1x5 //name for export

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%'
  },
  head: {},
  body: {
    height: '100%',
    width: '100%',
  },
  topView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20
  },
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20
  },
  textSmall: {
    fontSize: generalStyles.screenTextSizeSmall,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    textAlign: 'center',
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
  boldText: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeight
  },
  exampleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: 6
  },
  exampleTextSmall: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
    textAlign: 'center',
  },
  exampleTextSmallColor: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
    color: 'green'
  },
  exampleText: {
    fontSize: generalStyles.exampleTextSize,
    fontWeight: generalStyles.exampleTextWeight,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
  
})
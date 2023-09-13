import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 5; //screen number



const Class1x3x5 = ({route}) => {  //screen name

  
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
            <Text style={{...styles.text , fontSize: 20, fontWeight: '600', color: '#6441A5'}}>Group two:</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Many verbs with one consonant and a few with a double consonant at the end belong in this group: -pp, -nn, -l, -p. Also this with stem ending with a double consonant that sound like one: -nd, -lg. {'\n\n\n'}Here, we attach <Text style={styles.textColor}>-te</Text>:{'\n'}</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>å kjøpe<Text style={styles.textSmall}> - kjøp<Text style={styles.textColor}>te</Text></Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>å hoppe<Text style={styles.textSmall}> - hopp<Text style={styles.textColor}>te</Text></Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>å smile<Text style={styles.textSmall}> - smil<Text style={styles.textColor}>te</Text></Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>å bestemme<Text style={styles.textSmall}> - bestem<Text style={styles.textColor}>te</Text></Text></Text>
          </View>
          
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x3x6'} //link next
        linkPrevious={'Class1x3x4'}  //link previous
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

export default Class1x3x5 //name for export

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
    marginBottom: 0,
    marginHorizontal: 20
  },
  textSmall: {
    fontSize: generalStyles.screenTextSizeSmall,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
  },
  textColor: {
    color: '#6441A5',
  },
  exampleContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: 6
  },
  exampleTextSmall: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
    textAlign: 'center',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
  
})
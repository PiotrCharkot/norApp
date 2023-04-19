import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 6;



const Class1x1x6 = ({route}) => {

  
    const {userPoints,  latestScreen, comeBackRoute} = route.params
    
    console.log('points last screen in 6: ' , userPoints );

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
      <ProgressBar screenNum={currentScreen} totalLenghtNum={9} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>We use present time when:</Text>
            <Text style={styles.text}></Text>

            <Text style={styles.textSmall}> - something happens regulary,</Text>
            <Text style={styles.textSmall}> - something happens right now,</Text>
            <Text style={styles.textSmall}> - something is going to happen in the future,</Text>
            <Text style={styles.textSmall}> - we want to describe current state, abilities or characteristics</Text>

            

          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Jeg spiser frokost klokka syv hver dag</Text>
            <Text style={styles.textSmall}>I eat breakfast at seven o'clock every day</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Hun kommer nå</Text>
            <Text style={styles.textSmall}>She is coming now</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Vi reiser til Norge neste måned</Text>
            <Text style={styles.textSmall}>We are traveling to Norway next month</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Hun er syk</Text>
            <Text style={styles.textSmall}>She is sick</Text>
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x1x7'}
        linkPrevious={'Class1x1x5'} 
        buttonWidth={45}
        buttonHeight={45}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        comeBack={comeBack}
        />
      </View>
    </View>
  )
}

export default Class1x1x6

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
    fontWeight: '400',
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '400',
  },
  boldText: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '700'
  },
  exampleContainer: {
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: 6
  },
  exampleTextSmall: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
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
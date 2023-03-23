import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 4;



const Class1x1x4 = ({route}) => {

  
    const {userPoints,  latestScreen, comeBackRoute} = route.params
    
    console.log('points last screen in 4: ' , userPoints );

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
            <Text style={styles.text}>Norwegian verb can not stand alone in the sentence. It also needs a subject like 'I' or 'You'.</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Let's see how can we use verb 'å like' (to like).</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Jeg liker musikk<Text style={styles.textSmall}> - I like music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Du liker musikk<Text style={styles.textSmall}> - You like music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Han liker musikk<Text style={styles.textSmall}> - He likes music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Hun liker musikk<Text style={styles.textSmall}> - She likes music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Det liker musikk<Text style={styles.textSmall}> - It likes music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Vi liker musikk<Text style={styles.textSmall}> - We like music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>Dere liker musikk<Text style={styles.textSmall}> - You like music</Text></Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>De liker musikk<Text style={styles.textSmall}> - They like music</Text></Text>
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x1x5'}
        linkPrevious={'Class1x1x3'} 
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

export default Class1x1x4

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
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
  
})
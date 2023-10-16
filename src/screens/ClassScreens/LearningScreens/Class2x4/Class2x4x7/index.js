import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { getAuth } from 'firebase/auth';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 7;



const Class2x4x7 = ({route}) => {


    const auth = getAuth();
    const user = auth.currentUser;
  
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          

          <View style={styles.textContainer}>
           
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmallColor2}>Direct speech</Text>
            <Text style={styles.textSmall}>Hun sa, "Jeg skal reise i morgen."</Text>
            <Text style={styles.textSmall}>(She said, "I'm traveling tomorrow.")</Text>
            <Text style={styles.exampleTextSmallColor}>Indirect speech</Text>
            <Text style={styles.textSmall}>Hun sa at hun skulle reise i morgen.</Text>
            <Text style={styles.textSmall}>(She said she was traveling tomorrow.)</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>We shifted from the future "skal" (will) in her direct words to the past "skulle" (would) when sharing her plans indirectly. {'\n\n'}"Jeg" (I) becomes "hun" (she).</Text>
          </View>

        </ScrollView>
    

        <View style={styles.progressBarContainer}>

            <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        </View>

        <View style={styles.bottomBarContainer}>
            <BottomBar 
            linkNext={'Class2x4x8'}
            linkPrevious={'Class2x4x6'} 
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

export default Class2x4x7

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%'
  },
  head: {},
  body: {
    height: '100%',
    width: '100%',
    marginTop: 80,
    marginBottom: 100,
  },
  progressBarContainer: {
    width: '100%',
    position: 'absolute',
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
    color: 'darkred',
    fontWeight: '500'
  },
  boldText: {
    fontWeight: generalStyles.learningScreenTitleFontWeight
  },
  textName: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '600',
    color: '#cf5eff'
  },
  exampleContainer: {
    paddingBottom: 16,
    paddingHorizontal: 6,
    marginHorizontal: 20,
    marginVertical: 12,
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
    fontSize: 20,
    fontWeight: generalStyles.exampleTextWeight,
    marginTop: 40,
    marginBottom: 10,
    color: '#6441A5'
},
exampleTextSmallColor2: {
    fontSize: 20,
    fontWeight: generalStyles.exampleTextWeight,
    marginTop: 20,
    marginBottom: 10,
    color: 'darkred'
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
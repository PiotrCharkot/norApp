import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 9; //screen number



const Class5x2x9 = ({route}) => {  //screen name

  
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
            <Text style={styles.text}>Plural:</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>vi</Text>
            <Text style={styles.textSmall}>masculine: <Text style={styles.exampleTextSmallColor}>vår</Text></Text>
            <Text style={styles.textSmall}>feminine: <Text style={styles.exampleTextSmallColor}>vår</Text></Text>
            <Text style={styles.textSmall}>neuter: <Text style={styles.exampleTextSmallColor}>vårt</Text></Text>
            <Text style={styles.textSmall}>plural: <Text style={styles.exampleTextSmallColor}>våre</Text></Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>dere</Text>
            <Text style={styles.textSmall}>masculine: <Text style={styles.exampleTextSmallColor}>deres</Text></Text>
            <Text style={styles.textSmall}>feminine: <Text style={styles.exampleTextSmallColor}>deres</Text></Text>
            <Text style={styles.textSmall}>neuter: <Text style={styles.exampleTextSmallColor}>deres</Text></Text>
            <Text style={styles.textSmall}>plural: <Text style={styles.exampleTextSmallColor}>deres</Text></Text>
          </View>

          

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTextSmall}>de</Text>
            <Text style={styles.textSmall}>masculine: <Text style={styles.exampleTextSmallColor}>deres</Text>/<Text style={styles.exampleTextSmallColor}>sin</Text></Text>
            <Text style={styles.textSmall}>feminine: <Text style={styles.exampleTextSmallColor}>deres</Text>/<Text style={styles.exampleTextSmallColor}>si</Text></Text>
            <Text style={styles.textSmall}>neuter: <Text style={styles.exampleTextSmallColor}>deres</Text>/<Text style={styles.exampleTextSmallColor}>sitt</Text></Text>
            <Text style={styles.textSmall}>plural: <Text style={styles.exampleTextSmallColor}>deres</Text>/<Text style={styles.exampleTextSmallColor}>sine</Text></Text>
          </View>




        </ScrollView>

        <View style={styles.progressBarContainer}>

          <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        </View>

        <View style={styles.bottomBarContainer}>
          <BottomBar 
          linkNext={'Class5x2x10'} //link next
          linkPrevious={'Class5x2x8'}  //link previous
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

export default Class5x2x9 //name for export

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%'
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
  textContainer: {
    marginTop: generalStyles.marginTopTextCont,
    marginBottom: generalStyles.marginBottomTextCont,
    marginHorizontal: generalStyles.marginHorizontalTextCont
  },
  textSmall: {
    fontSize: generalStyles.screenTextSizeSmall,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
  },
  textColor2: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    color: 'brown',
    fontWeight: generalStyles.textColorFontWeight
  },
  textColor1: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    color: generalStyles.colorText,
    fontWeight: generalStyles.textColorFontWeight
  },
  textColor: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeightMedium,
    color: generalStyles.colorText1,
    fontWeight: generalStyles.textColorFontWeight
  },
  boldText: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: generalStyles.learningScreenTitleFontWeight
  },
  exampleContainer: {
    paddingHorizontal: generalStyles.paddingHorizontalEgzCont,
    paddingVertical: generalStyles.paddingVerticalEgzCont,
    marginHorizontal: generalStyles.marginHorizontalEgzCont,
    marginVertical: generalStyles.marginVerticalEgzCont1,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: generalStyles.borderRadiusEgzCont
  },
  exampleTextSmall: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
    textAlign: 'center',
  },
  exampleTextSmallColor: {
    fontSize: generalStyles.exampleTextSizeSmall,
    fontWeight: generalStyles.exampleTextWeight,
    color: generalStyles.colorText
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: generalStyles.bottomBarDistFromBottom,
    width: '100%',
  },
  
  
})
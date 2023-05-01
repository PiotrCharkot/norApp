import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import AnswerButton from '../../../../../components/buttons/AnswerButton'
import generalStyles from '../../../../../styles/generalStyles';

const currentScreen = 7;
const answerOne = 'æ';
const answerTwo = 'to';
const answerThree = 'å';
const answerFour = 'a';
const correctAnswers = [false, false, true, false];


const Class1x1x7 = ({route}) => {

    const {userPoints, latestScreen, comeBackRoute, allScreensNum} = route.params
    
    console.log('points 7nd screen: ' , userPoints );
    const [isAnswerAChecked, setIsAnswerAChecked] = useState(false);
    const [isAnswerBChecked, setIsAnswerBChecked] = useState(false);
    const [isAnswerCChecked, setIsAnswerCChecked] = useState(false);
    const [isAnswerDChecked, setIsAnswerDChecked] = useState(false);
    const [answerBonus, setAnswerBonus] = useState(8)
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
    const [comeBack, setComeBack] = useState(false);


    
    useFocusEffect(() => {
        
        if (latestScreen > currentScreen) {
            setLatestScreenDone(latestScreen);
            setComeBack(true);
        }

        if (route.params.userPoints > 0) {
            console.log('setting new points', route.params.userPoints );
            setCurrentPoints(userPoints)
        }

        // if (latestScreen >= currentScreen) {
        //   setAnswerBonus(0)  

        //   why is set answer bonus = 0 ?????????????????? check other screens!!!
        // }
    })

  return (
    <View style={styles.mainContainer}>
      <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>

            <View style={styles.topView}>
                <Text style={styles.questionText}>Which letter is used before base form of norwegian verb?</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AnswerButton text={answerOne} returnAnswer={(boolean) => setIsAnswerAChecked(boolean)}/>
                <AnswerButton text={answerTwo} returnAnswer={(boolean) => setIsAnswerBChecked(boolean)}/>
                <AnswerButton text={answerThree} returnAnswer={(boolean) => setIsAnswerCChecked(boolean)}/>
                <AnswerButton text={answerFour} returnAnswer={(boolean) => setIsAnswerDChecked(boolean)}/>
            </View>
          
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        callbackButton={'checkAnswer'} 
        userAnswers={[isAnswerAChecked, isAnswerBChecked, isAnswerCChecked, isAnswerDChecked]} 
        correctAnswers={correctAnswers}
        answerBonus={answerBonus}
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        linkNext={'Class1x1x8'}
        linkPrevious={'Class1x1x6'}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        questionScreen={true}
        comeBack={comeBack}
        allScreensNum={allScreensNum}
        />
      </View>
    </View>
  )
}

export default Class1x1x7

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
  questionText: {
    fontSize: generalStyles.learningScreenTitleSize,
    fontWeight: generalStyles.learningScreenTitleFontWeight,
    marginVertical: 10,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textBold: {
    color: 'grey'
  }
  
})
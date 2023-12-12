import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useState, useEffect, useRef} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';
import Loader from '../../../../../components/other/Loader';
import type1prep from '../../../../../listData/exerciseData/A1/Type1Data/Prepositions'
import type2prep from '../../../../../listData/exerciseData/A1/Type2Data/Prepositions'
import type3prep from '../../../../../listData/exerciseData/A1/Type3Data/Prepositions'
import type4prep from '../../../../../listData/exerciseData/A1/Type4Data/Prepositions'
import type5prep from '../../../../../listData/exerciseData/A1/Type5Data/Prepositions'
import type6prep from '../../../../../listData/exerciseData/A1/Type6Data/Prepositions'



const currentScreen = 1;
const allScreensNum = 6;
const colorUnderline = generalStyles.colorHighlightChoiceOption;
const colorChosenAns = generalStyles.colorHighlightChoosenAnswer;
const outputColors = [generalStyles.wrongAnswerConfirmationColor, generalStyles.neutralAnswerConfirmationColor, generalStyles.correctAnswerConfirmationColor];


//Type1 opening screen


const typesInSet = [type1prep, type4prep, type2prep, type3prep, type5prep, type6prep];
const linkList = ['Exc1x2x1', 'Type4', 'Type2', 'Type3', 'Type5', 'Type6'];

const Exc1x2x1 = ({route}) => {
  
  const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
  const [latestScreenAnswered, setLatestScreenAnswered] = useState(0);

  const [currentPoints, setCurrentPoints] = useState(0);
  const [comeBack, setComeBack] = useState(false);
  const [answersChecked, setAnswersChecked] = useState([]);
  const [correctAnswers, setCorrectAnswers]= useState([])
  const [contentReady, setContentReady] = useState(false)

  const [exeList, setExeList] = useState([])


  const a1background = useRef(new Animated.Value(0)).current;
  const a2background = useRef(new Animated.Value(0)).current;
  const a3background = useRef(new Animated.Value(0)).current;
  const a4background = useRef(new Animated.Value(0)).current;
  const a5background = useRef(new Animated.Value(0)).current;

  const [A1, setA1] = useState(null);
  const [A2, setA2] = useState(null);
  const [A3, setA3] = useState(null);
  const [A4, setA4] = useState(null);
  const [A5, setA5] = useState(null);


  const backgroundArray = [a1background, a2background, a3background, a4background, a5background]


  const backgroundA1 = a1background.interpolate({
    inputRange: [-100, 0, 100], 
    outputRange: outputColors
  })

  const backgroundA2 = a2background.interpolate({
    inputRange: [-100, 0, 100], 
    outputRange: outputColors
  })

  const backgroundA3 = a3background.interpolate({
    inputRange: [-100, 0, 100], 
    outputRange: outputColors
  })

  const backgroundA4 = a4background.interpolate({
    inputRange: [-100, 0, 100], 
    outputRange: outputColors
  })

  const backgroundA5 = a5background.interpolate({
    inputRange: [-100, 0, 100], 
    outputRange: outputColors
  })

    
   
    
  useFocusEffect(() => {
    if (route.params) {
      const {userPoints, latestScreen, comeBackRoute, latestAnswered, nextScreen} = route.params;
      

      console.log('screen num in opening screen: ', nextScreen);
      if (latestScreen > currentScreen) {
        setLatestScreenDone(latestScreen);
        setLatestScreenAnswered(latestAnswered);
        setComeBack(true)
      }

      if (route.params.userPoints > 0) {
        setCurrentPoints(userPoints)
    }
    }
    
  })



  useEffect(() => {

    let tempArr = []; 


    for (let i = 0; i < typesInSet.length; i++) {
        let randomVal = Math.floor(Math.random() * typesInSet[i].length); 

        if (typesInSet[i][randomVal].typeOfScreen === '3') {

            let newArrGaps = [];
            let newArrText = [];

            for (let j = 0; j < typesInSet[i][randomVal].correctAnswers.length; j++) {
                if (typesInSet[i][randomVal].wordsWithGaps[j] === '            ') {
                    newArrGaps.push(j)
                } else {
                    newArrText.push(j)
                }
            }


            typesInSet[i][randomVal].gapsIndex = newArrGaps;
            typesInSet[i][randomVal].textIndex = newArrText;
            console.log('gaps: ', newArrGaps);
            console.log('text: ', newArrText);


        }


        tempArr.push(typesInSet[i][randomVal])
    }


    console.log('my list of questions', tempArr);
    setExeList(tempArr);
    setCorrectAnswers(tempArr[0].correctAnswers);
    setContentReady(true);


  }, [])
  



  useEffect(() => {

    

    if (answersChecked.length !== 0) {
        setLatestScreenAnswered(currentScreen);
        let delayAnimation = 0;
            
        for (let i = 0; i < answersChecked.length; i++) {
            if (answersChecked[i]) {
                Animated.timing(backgroundArray[i], {
                    toValue: 100,
                    duration: 500,
                    delay: delayAnimation,
                    useNativeDriver: false
                }).start()
            } else {
                Animated.timing(backgroundArray[i], {
                    toValue: -100,
                    duration: 500,
                    delay: delayAnimation,
                    useNativeDriver: false
                }).start()
            }
            
            delayAnimation = delayAnimation + 200;
        }
    }
  
    
  }, [answersChecked])
  


  return (
    <View style={styles.mainContainer}>

      {contentReady ? <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Choose good anwer out of two</Text>
          </View>

          <View style={styles.middleView}>


            {exeList[0].nuberOfQuestions > 0 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA1}} >
                <Text style={styles.text}>
                {exeList[0].questions[0][0]}<TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A1 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA1(1)}>
                            <Text style={styles.text}>{exeList[0].questions[0][1]}</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A1 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA1(2)}>
                            <Text style={styles.text}>{exeList[0].questions[0][2]}</Text>
                        </TouchableOpacity>{exeList[0].questions[0][3]}
                </Text>
            </Animated.View> : <View style={{height: 0}}></View>}
            

            {exeList[0].nuberOfQuestions > 1 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA2}} >
                <Text style={styles.text}>
                {exeList[0].questions[1][0]}<TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A2 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA2(1)}>
                            <Text style={styles.text}>{exeList[0].questions[1][1]}</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A2 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA2(2)}>
                            <Text style={styles.text}>{exeList[0].questions[1][2]}</Text>
                        </TouchableOpacity>{exeList[0].questions[1][3]}
                </Text>
            </Animated.View> : <View style={{height: 0}}></View>}
            
            

            {exeList[0].nuberOfQuestions > 2 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA3}} >
                <Text style={styles.text}>
                {exeList[0].questions[2][0]}<TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A3 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA3(1)}>
                            <Text style={styles.text}>{exeList[0].questions[2][1]}</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A3 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA3(2)}>
                            <Text style={styles.text}>{exeList[0].questions[2][2]}</Text>
                        </TouchableOpacity>{exeList[0].questions[2][3]}
                </Text>
            </Animated.View> : <View style={{height: 0}}></View>}
            



            {exeList[0].nuberOfQuestions > 3 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA4}} >
                <Text style={styles.text}>
                {exeList[0].questions[3][0]}<TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A4 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA4(1)}>
                            <Text style={styles.text}>{exeList[0].questions[3][1]}</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A4 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA4(2)}>
                            <Text style={styles.text}>{exeList[0].questions[3][2]}</Text>
                        </TouchableOpacity>{exeList[0].questions[3][3]}
                </Text>
            </Animated.View> : <View style={{height: 0}}></View>}
            


            {exeList[0].nuberOfQuestions > 4 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA5}} >
                <Text style={styles.text}>
                {exeList[0].questions[4][0]}<TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A5 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA5(1)}>
                            <Text style={styles.text}>{exeList[0].questions[3][1]}</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A5 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA5(2)}>
                            <Text style={styles.text}>{exeList[0].questions[3][2]}</Text>
                        </TouchableOpacity>{exeList[0].questions[3][3]}
                </Text>
            </Animated.View> : <View style={{height: 0}}></View>}
            
            
           

           
          </View>
        </ScrollView> : <View style={styles.loaderDisplay}>
            <Loader />
        </View> }
        

        <View style={styles.progressBarContainer}>
          <ProgressBar screenNum={1} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBack}/>

        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        callbackButton={'checkAllAnswers'}
        correctAnswers={correctAnswers}
        userAnswers={[A1, A2, A3, A4, A5]}
        linkNext={linkList[currentScreen]} 
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        isFirstScreen={true}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        questionScreen={true}
        comeBack={comeBack}
        checkAns={(arr) => setAnswersChecked(arr)}
        latestAnswered={latestScreenAnswered}
        allScreensNum={allScreensNum}
        questionList={exeList}
        links={linkList}
        previousScreen={currentScreen}
        />
      </View>
    </View>
  )
}

export default Exc1x2x1

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: 'white'
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
  middleView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: generalStyles.exerciseScreenTitleSize,
    fontWeight: generalStyles.exerciseScreenTitleFontWeight,
    marginVertical: 10,
  },
  questionContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4.5,
    elevation: 5
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    
  },
  answerOpacity: {
    justifyContent: 'flex-end',
    alignItems: 'center', 
    backgroundColor: 'lightgrey', 
    borderRadius: 6,
    transform: [{translateY: 3}]
    
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  loaderDisplay: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
},
})
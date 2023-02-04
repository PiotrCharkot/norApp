import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useRef} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../components/bars/progressBar'
import BottomBar from '../../../../components/bars/bottomBar'

const currentScreen = 1;
const colorUnderline = 'lightgrey';
const colorChosenAns = 'lightblue';
const correctAnswerColor = 'rgb(144, 238, 144)';
const wrongAnswerColor = 'rgb(252, 109, 118)';
const neutralAnswerColor = 'rgb(255, 255, 255)';
const outputColors = [wrongAnswerColor, neutralAnswerColor, correctAnswerColor];
const bckColor1 = '#00000'

const correctAnswers = [1, 2, 2, 1, 1];

const Exc1x1x1 = ({route}) => {
  
  const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [comeBack, setComeBack] = useState(false);
  const [answersChecked, setAnswersChecked] = useState([]);

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
      const {userPoints, latestScreen, comeBackRoute} = route.params;
      
      if (latestScreen > currentScreen) {
        setLatestScreenDone(latestScreen);
        setComeBack(true)
      }

      if (route.params.userPoints > 0) {
        setCurrentPoints(userPoints)
    }
    }
    console.log('anwers: ', answersChecked);
  })

  useEffect(() => {

    if (answersChecked.length !== 0) {
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
      <ProgressBar screenNum={1} totalLenghtNum={8} latestScreen={latestScreenDone} comeBack={comeBack}/>
        <View style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Choose good anwer out of two</Text>
          </View>

          <View style={styles.middleView}>

            <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA1}} >
                <Text style={styles.text}>
                    Question 1  is first word <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A1 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA1(1)}>
                            <Text style={styles.text}>word1</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A1 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA1(2)}>
                            <Text style={styles.text}>word2</Text>
                        </TouchableOpacity> rest of text
                </Text>
            </Animated.View>

            <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA2}} >
                <Text style={styles.text}>
                    Question 2 is second word is correct some more text here <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A2 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA2(1)}>
                            <Text style={styles.text}>word1</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A2 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA2(2)}>
                            <Text style={styles.text}>word2</Text>
                        </TouchableOpacity> rest of text
                </Text>
            </Animated.View>
            

            <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA3}} >
                <Text style={styles.text}>
                    Question 3 is second word <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A3 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA3(1)}>
                            <Text style={styles.text}>word1</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A3 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA3(2)}>
                            <Text style={styles.text}>word2</Text>
                        </TouchableOpacity> rest of text
                </Text>
            </Animated.View>


            <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA4}} >
                <Text style={styles.text}>
                    Question 4 corect is first word <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A4 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA4(1)}>
                            <Text style={styles.text}>word1</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A4 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA4(2)}>
                            <Text style={styles.text}>word2</Text>
                        </TouchableOpacity> rest of text some more dummy text here
                </Text>
            </Animated.View>

            <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA5}} >
                <Text style={styles.text}>
                    Question 5  is first word <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A5 === 1 ? colorChosenAns : colorUnderline}} onPress={() => setA5(1)}>
                            <Text style={styles.text}>word1</Text>
                            </TouchableOpacity> / <TouchableOpacity style={{...styles.answerOpacity, backgroundColor: A5 === 2 ? colorChosenAns : colorUnderline}} onPress={() => setA5(2)}>
                            <Text style={styles.text}>word2</Text>
                        </TouchableOpacity> rest of text
                </Text>
            </Animated.View>
            
           

           
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        callbackButton={'checkAllAnswers'}
        correctAnswers={correctAnswers}
        userAnswers={[A1, A2, A3, A4, A5]}
        linkNext={'Exc1x1x2'} 
        buttonWidth={45}
        buttonHeight={45}
        isFirstScreen={true}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        questionScreen={true}
        comeBack={comeBack}
        checkAns={(arr) => setAnswersChecked(arr)}
        />
      </View>
    </View>
  )
}

export default Exc1x1x1

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'white'
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
  middleView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
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
    fontSize: 18,
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
  
})
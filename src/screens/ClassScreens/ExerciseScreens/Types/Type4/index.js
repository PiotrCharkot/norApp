import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { Input } from "react-native-elements";
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import generalStyles from '../../../../../styles/generalStyles';



const outputColors = [generalStyles.wrongAnswerConfirmationColor, generalStyles.neutralAnswerConfirmationColor, generalStyles.correctAnswerConfirmationColor];

const exitLink = 'ExitExcScreen'

const Type4 = ({route}) => {

    const {userPoints, latestScreen, comeBackRoute, latestAnswered, allScreensNum, exeList, linkList, nextScreen} = route.params
    
    const [A1, setA1] = useState('');
    const [A2, setA2] = useState('');
    const [A3, setA3] = useState('');
    const [A4, setA4] = useState('');
    const [A5, setA5] = useState('');
    const [A6, setA6] = useState('');
    const [A7, setA7] = useState('');
    const [A8, setA8] = useState('');
    const [answersChecked, setAnswersChecked] = useState([])
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(nextScreen);
    const [comeBack, setComeBack] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);
    const [latestScreenAnswered, setLatestScreenAnswered] = useState(latestAnswered);

    const a1background = useRef(new Animated.Value(0)).current;
    const a2background = useRef(new Animated.Value(0)).current;
    const a3background = useRef(new Animated.Value(0)).current;
    const a4background = useRef(new Animated.Value(0)).current;
    const a5background = useRef(new Animated.Value(0)).current;
    const a6background = useRef(new Animated.Value(0)).current;
    const a7background = useRef(new Animated.Value(0)).current;
    const a8background = useRef(new Animated.Value(0)).current;
    

    const backgroundArray = [a1background, a2background, a3background, a4background, a5background, a6background, a7background, a8background];


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

    const backgroundA6 = a6background.interpolate({
        inputRange: [-100, 0, 100], 
        outputRange: outputColors
    })

    const backgroundA7 = a7background.interpolate({
        inputRange: [-100, 0, 100], 
        outputRange: outputColors
    })

    const backgroundA8 = a8background.interpolate({
        inputRange: [-100, 0, 100], 
        outputRange: outputColors
    })

    const resetAnimation = () => {

        setResetCheck(!resetCheck)
        for (let i = 0; i < answersChecked.length; i++) {
            Animated.timing(backgroundArray[i], {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
    }

    useFocusEffect(() => {
        


        if (latestScreen > nextScreen) {
            setLatestScreenAnswered(latestAnswered);
            setLatestScreenDone(latestScreen);
            setComeBack(true)
        }

        if (route.params.userPoints > 0) {
            console.log('setting new points', route.params.userPoints );
            setCurrentPoints(userPoints)
        }
    })

    useEffect(() => {

        console.log('show me my link list: ', linkList);
        console.log('my current screen is: ', nextScreen);
        if (answersChecked.length !== 0) {
          setLatestScreenAnswered(nextScreen); 
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

            <View style={styles.topView}>
                <Text style={styles.questionText}>Type correct form of adjective "liten". yyy</Text>
            </View>

            <View style={styles.bodyContainer}>


                {exeList[nextScreen - 1].nuberOfQuestions > 0 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA1}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[0][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => {setA1(text.toLowerCase().trim())}}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[0][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                

                {exeList[nextScreen - 1].nuberOfQuestions > 1 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA2}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[1][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA2(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[1][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                


                {exeList[nextScreen - 1].nuberOfQuestions > 2 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA3}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[2][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA3(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[2][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                


                {exeList[nextScreen - 1].nuberOfQuestions > 3 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA4}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[3][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA4(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[3][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                



                {exeList[nextScreen - 1].nuberOfQuestions > 4 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA5}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[4][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA5(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[4][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                


                {exeList[nextScreen - 1].nuberOfQuestions > 5 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA6}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[5][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA6(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[5][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                


                {exeList[nextScreen - 1].nuberOfQuestions > 6 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA7}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[6][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA7(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[6][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                


                {exeList[nextScreen - 1].nuberOfQuestions > 7 ? <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA8}}>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[7][0]}</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            inputStyle={styles.inputContainerTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA8(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>{exeList[nextScreen - 1].questions[7][1]}</Text>
                </Animated.View> : <View style={{height: 0}}></View>}
                
                
            </View>
          
        </ScrollView>

        <View style={styles.progressBarContainer}>
          <ProgressBar screenNum={nextScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>

        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        callbackButton={'checkAllAnswers'} 
        userAnswers={[A1, A2, A3, A4, A5, A6, A7, A8]}
        correctAnswers={exeList[nextScreen - 1].correctAnswers}
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        linkNext={allScreensNum === nextScreen ? exitLink : linkList[nextScreen]}
        linkPrevious={linkList[nextScreen - 2]}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={nextScreen}
        questionScreen={true}
        comeBack={comeBack}
        checkAns={(arr) => setAnswersChecked(arr)}
        resetCheck={resetCheck}
        latestAnswered={latestScreenAnswered}
        allScreensNum={allScreensNum}
        questionList={exeList}
        links={linkList}
        totalPoints={exeList[exeList.length - 2]}
        dataForMarkers={exeList[exeList.length - 1]}
        />
      </View>
    </View>
  )
}

export default Type4

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
  questionText: {
    fontSize: generalStyles.exerciseScreenTitleSize,
    fontWeight: generalStyles.exerciseScreenTitleFontWeight,
    marginVertical: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 10, 
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4.5,
    elevation: 5
  },
  bodyContainer: {
    paddingTop: 10
  },
  text: {
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: '400',
  },
  inputContainerTextStyle: {
    fontSize: 16,
    color: 'black'
  },
  inputContainer: {
    width: 100,
  },
  inputContainerStyle: {
    height: 40, 
    borderBottomColor: 'transparent',
    marginBottom: -21,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textBold: {
    color: 'grey'
  },
  

})
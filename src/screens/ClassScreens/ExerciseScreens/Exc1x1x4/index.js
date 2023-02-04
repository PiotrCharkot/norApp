import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from "react-native-elements";
import ProgressBar from '../../../../components/bars/progressBar'
import BottomBar from '../../../../components/bars/bottomBar'



const currentScreen = 4;
const correct = 'green';
const correct1 = 'lightgreen';
const incorrect = 'red';
const incorrect1 = 'darkred';

const correctAnswerColor = 'rgb(144, 238, 144)';
const wrongAnswerColor = 'rgb(252, 109, 118)';
const neutralAnswerColor = 'rgb(255, 255, 255)';
const outputColors = [wrongAnswerColor, neutralAnswerColor, correctAnswerColor];


const correctAnswers = ['små', 'små', 'lille', 'liten', 'lita', 'små', 'lille', 'lite'];

const Exc1x1x4 = ({route}) => {

    const {userPoints, latestScreen, comeBackRoute} = route.params
    
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
    const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
    const [isCorrect, setIsCorrect] = useState([0, 0, 0, 0, 0, 0, 0, 0])
    const [comeBack, setComeBack] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);

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
        
        if (latestScreen > currentScreen) {
            setLatestScreenDone(latestScreen);
            setComeBack(true)
        }

        if (route.params.userPoints > 0) {
            console.log('setting new points', route.params.userPoints );
            setCurrentPoints(userPoints)
        }
    })

    useEffect(() => {

        if (answersChecked.length !== 0) {

            let delayAnimation = 0;
            console.log(answersChecked);
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
      <ProgressBar screenNum={4} totalLenghtNum={8} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>

            <View style={styles.topView}>
                <Text style={styles.questionText}>Type correct form of adjective "liten".</Text>
            </View>

            <ScrollView style={styles.bodyContainer}>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA1}}>
                    <Text style={styles.text}>de</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => {setA1(text.toLowerCase().trim())}}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>steinene</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA2}}>
                    <Text style={styles.text}>tre</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA2(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>katter</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA3}}>
                    <Text style={styles.text}>den</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA3(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>skogen</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA4}}>
                    <Text style={styles.text}>en</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA4(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>endring</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA5}}>
                    <Text style={styles.text}>ei</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA5(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>jente</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA6}}>
                    <Text style={styles.text}>de</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA6(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>husene</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA7}}>
                    <Text style={styles.text}>det</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA7(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>bakeriet</Text>
                </Animated.View>

                <Animated.View style={{...styles.questionContainer, backgroundColor: backgroundA8}}>
                    <Text style={styles.text}>et</Text> 

                        <View style={styles.inputContainer}>

                            <Input 
                            
                            inputContainerStyle={styles.inputContainerStyle}
                            autoCapitalize='none'
                            onChangeText={(text) => setA8(text.toLowerCase().trim())}
                            onSelectionChange={() => resetAnimation()}
                            /> 
                        </View>
                    <Text style={styles.text}>problem</Text>
                </Animated.View>
                <View style={{height: 400}}></View>
            </ScrollView>
          
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        callbackButton={'checkAllAnswers'} 
        userAnswers={[A1, A2, A3, A4, A5, A6, A7, A8]}
        correctAnswers={correctAnswers}
        answerBonus={15}
        buttonWidth={45}
        buttonHeight={45}
        linkNext={'Exc1x1x5'}
        linkPrevious={'Exc1x1x3'}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        questionScreen={true}
        comeBack={comeBack}
        checkAns={(arr) => setAnswersChecked(arr)}
        resetCheck={resetCheck}
        />
      </View>
    </View>
  )
}

export default Exc1x1x4

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
    fontSize: 22,
    fontWeight: '700',
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
    fontSize: 19,
    paddingBottom: 4,
    fontWeight: '400'
  },
  inputContainer: {
    width: 100
    
  },
  inputContainerStyle: {
    height: 40, 
    borderBottomColor: 'transparent',
    marginBottom: -20,
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
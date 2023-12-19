import { View, Text, StyleSheet, Animated, Dimensions, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar';
import AnswerButton from '../../../../../components/buttons/AnswerButton';
import generalStyles from '../../../../../styles/generalStyles';


const correct1 = generalStyles.gradientBottomCorrectDraggable;

const exitLink = 'ExitExcScreen'

const Type7 = ({route}) => {

    const {userPoints, latestScreen, comeBackRoute, latestAnswered, allScreensNum, exeList, linkList, nextScreen} = route.params


    const isCorrectNewArr = Array(exeList[nextScreen - 1].words.length).fill(0);
   
    const [isCorrect, setIsCorrect] = useState(isCorrectNewArr)
    const [answersChecked, setAnswersChecked] = useState([]);
    const [showMistakes, setShowMistakes] = useState(false);
    const [markedWords, setMarkdWords] = useState([]);
    const [showCorrect, setShowCorrect] = useState(false);
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(nextScreen);
    const [comeBack, setComeBack] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);
    const [latestScreenAnswered, setLatestScreenAnswered] = useState(latestAnswered);


    useEffect(() => {
        
      if (answersChecked.length !== 0) {

        setLatestScreenAnswered(nextScreen);
          
        setShowMistakes(true)
        for (let i = 0; i < answersChecked.length; i++) {

          const newArr = [...isCorrect];
          newArr.map((val, ind) => {
              answersChecked[ind] === 1 ? newArr[ind] = 1 : newArr[ind] = 0
          })
          
          setIsCorrect(newArr);
        }
    }
  
  }, [answersChecked])
    

   
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


    const markWord = (word) => {

     
      if (markedWords.includes(word) && !showMistakes) {
        let tempArr = [...markedWords];

        let ind = tempArr.indexOf(word);
        tempArr.splice(ind, 1);

        setMarkdWords(tempArr);
      } else if (!showMistakes) {
        let tempArr = [...markedWords];

        tempArr.push(word);
        
        setMarkdWords(tempArr);
      } else if (markedWords.includes(word) && showMistakes){
        let tempArr = [...markedWords];

        let ind = tempArr.indexOf(word);
        tempArr.splice(ind, 1);

        setMarkdWords(tempArr);
      }
      
      
    }

    
  return (
    <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          <View style={styles.topView}>
              <Text style={styles.questionText}>Mark mistakes in text. yyyy</Text>
          </View>

          <View style={styles.textContainer}>
              

            {showCorrect ? exeList[nextScreen - 1].wordsCorrect.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={{
                        ...styles.touchable,
                        backgroundColor: 'transparent'
                  }}>
                  <Text style={{
                      ...styles.wordsTxt
                    }}>{item} </Text>
                </TouchableOpacity>
                
                )
                
            }) :  exeList[nextScreen - 1].words.map((item, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => markWord(index)} style={{
                        ...styles.touchable,
                        backgroundColor: isCorrect[index] === 1 ? correct1 : markedWords.includes(index) ? generalStyles.colorHighlightChoosenAnswer : 'transparent'
                    }}>
                  <Text style={{
                      ...styles.wordsTxt,
                      textDecorationLine: exeList[nextScreen - 1].mistakesIndex.includes(index) && showMistakes ? 'underline' : null,
                      textDecorationColor: 'red'
                    }}>{item} </Text>
                </TouchableOpacity>
                
              )
              
            })}

          </View>


          <View style={styles.btnContainer}>
          
            {showMistakes ? <AnswerButton text={'Show correct text'} colors={['#00308F', '#007FFF']}  returnAnswer={(boolean) => setShowCorrect(boolean)}/> : null}
          </View>
          

            
          
        </ScrollView>

        
        <View style={styles.progressBarContainer}>
            <ProgressBar screenNum={nextScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>

        </View>

    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        callbackButton={'markMistakes'} 
        userAnswers={markedWords}
        correctAnswers={exeList[nextScreen - 1].mistakesIndex}
        textLength={exeList[nextScreen - 1].words.length}
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

export default Type7

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
  questionText: {
    fontSize: generalStyles.exerciseScreenTitleSize,
    fontWeight: generalStyles.exerciseScreenTitleFontWeight,
    marginVertical: 10,
  },
  textContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  touchable: {
    borderRadius: 4,
    marginRight: 2,
    marginBottom: 4
  },
  wordsTxt: {
    fontSize: 15,
    fontWeight: '500'
  },
  btnContainer: {
    marginLeft: 20,
    marginTop: 50
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
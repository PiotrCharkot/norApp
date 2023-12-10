import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import Draggable from '../../../../../components/other/Draggable'
import generalStyles from '../../../../../styles/generalStyles';




const correct = generalStyles.gradientTopCorrectDraggable;
const correct1 = generalStyles.gradientBottomCorrectDraggable;
const incorrect = generalStyles.gradientBottomWrongDraggable;
const incorrect1 = generalStyles.gradientTopWrongDraggable;
const gradientTop = generalStyles.gradientTopDraggable;
const gradientBottom = generalStyles.gradientBottomDraggable;
const gradientTop2 = generalStyles.gradientTopDraggable3;
const gradientBottom2 = generalStyles.gradientBottomDraggable3;


// const correctAnswers = ['Å treffe spikeren på hodet', 'Å love gull og grønne skoger', 'Å ta med en klype salt', 'Å skjære alle over en kam', 'Å gå over bekken etter vann', 'Bedre sent enn aldri', 
// 'Som sild i tønne', 'Å satse alt på ett kort', 'Å slå to fluer i en smekk', 'Å smøre seg med tålmodighet', 'Å gjøre noen en bjørnetjeneste'   ];



const Type2 = ({route}) => {
    
    const {userPoints, latestScreen, comeBackRoute, latestAnswered, allScreensNum, exeList, linkList, nextScreen} = route.params
    

    const isCorrectNewArr = Array(exeList[nextScreen - 1].correctAnswers.length).fill(0);
    
    const [movingDraggable, setMovingDraggable] = useState(null);
    const [releaseDraggable, setReleaseDraggable] = useState(null);
    const [isCorrect, setIsCorrect] = useState(isCorrectNewArr)
    const [answersChecked, setAnswersChecked] = useState([])
    const [wordsLeft, setWordsLeft] = useState(exeList[nextScreen - 1].leftSideWords);
    const [wordsRight, setWordsRight] = useState(exeList[nextScreen - 1].rightSideWords);
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(nextScreen);
    const [comeBack, setComeBack] = useState(false);
    const [resetCheck, setResetCheck] = useState(false);
    const [latestScreenAnswered, setLatestScreenAnswered] = useState(latestAnswered);

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

        if (answersChecked.length !== 0) {
          setLatestScreenAnswered(nextScreen);
          for (let i = 0; i < answersChecked.length; i++) {

            const newArr = [...isCorrect];
            newArr.map((val, ind) => {
                answersChecked[ind] ? newArr[ind] = 1 : newArr[ind] = 2
            })

            setIsCorrect(newArr);
            
          }
      }
      
    
    }, [answersChecked])

    const onMovingDraggable = (movingDraggable) => {
        setMovingDraggable(movingDraggable);
    };
    
    const onReleaseDraggable = (releaseDraggable) => {
        setMovingDraggable(null);
        setReleaseDraggable(releaseDraggable);
    };

    const swap = (index1, index2) => {
        var arr = [...wordsLeft];
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        setWordsLeft(arr);
        setIsCorrect(isCorrectNewArr);
        setResetCheck(!resetCheck)
    };
    const swapRight = (index1, index2) => {
        var arr = [...wordsRight];
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        setWordsRight(arr);
        setIsCorrect(isCorrectNewArr);
        setResetCheck(!resetCheck)
    };

  return (
    <View style={styles.mainContainer}>
      <ProgressBar screenNum={nextScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>

            <View style={styles.topView}>
                <Text style={styles.questionText}>Match left to right. yyyy</Text>
            </View>

            <View style={styles.swapableContainer}>

                <View style={styles.leftContainer}>
                    {wordsLeft.map((item, index) => {
                        return (
                            <Draggable
                            key={index}
                            index={index}
                            movingDraggable={movingDraggable}
                            onMovingDraggable={onMovingDraggable}
                            releaseDraggable={releaseDraggable}
                            onReleaseDraggable={onReleaseDraggable}
                            swap={swap}
                            renderChild={(isMovedOver) => {
                                return (
            
                                <LinearGradient
                                colors={ isCorrect[index] === 0 ? [gradientTop, gradientBottom] : isCorrect[index] === 1 ? [correct , correct1] : [incorrect1 , incorrect]}
                                key={index}
                                    style={[
                                    isMovedOver && styles.draggableContainerSwap,
                                    styles.draggableContainer,
                                    ]}
                                >
                                    
                                    <Text style={styles.textInDraggable}>{item}</Text>
                                </LinearGradient>
                                );
                            }}
                            />
                        );
                        
                    })}
                </View>

                <View style={styles.rightContainer}>
                    {wordsRight.map((item, index) => {
                        return (
                            <Draggable
                            key={index}
                            index={index}
                            movingDraggable={movingDraggable}
                            onMovingDraggable={onMovingDraggable}
                            releaseDraggable={releaseDraggable}
                            onReleaseDraggable={onReleaseDraggable}
                            swap={swapRight}
                            renderChild={(isMovedOver) => {
                                return (
            
                                <LinearGradient
                                colors={isCorrect[index] === 0 ? [gradientTop2, gradientBottom2] : isCorrect[index] === 1 ? [correct , correct1] : [incorrect1 , incorrect]}
                                key={index}
                                    style={[
                                    isMovedOver && styles.draggableContainerSwap,
                                    styles.draggableContainer,
                                    ]}
                                >
                                    
                                    <Text style={styles.textInDraggable}>{item}</Text>
                                </LinearGradient>
                                );
                            }}
                            />
                        );
                        
                    })}
                </View>

            </View>
          
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar  
        callbackButton={'matchLR'} 
        userAnswers={wordsLeft}
        userAnswers2={wordsRight}
        correctAnswers={exeList[nextScreen - 1].correctAnswers}
        answerBonus={15}
        buttonWidth={generalStyles.buttonNextPrevSize}
        buttonHeight={generalStyles.buttonNextPrevSize}
        linkNext={linkList[nextScreen]}
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
        />
      </View>
    </View>
  )
}

export default Type2

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
    fontSize: generalStyles.exerciseScreenTitleSize,
    fontWeight: generalStyles.exerciseScreenTitleFontWeight,
    marginVertical: 10,
  },
  swapableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  leftContainer: {
    width: '50%',
    borderRightWidth: 0.5,
    borderRightColor: 'lightgrey',
    paddingHorizontal: 10
},
rightContainer: {
    width: '50%',
    paddingHorizontal: 10
    
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textBold: {
    color: 'grey'
  },
  exgzampleText: {
    fontSize: 18,
    fontWeight: '500',
    flexWrap: 'wrap'
  },
  exgzampleTextContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 30,
    marginVertical: 6,
    marginHorizontal: 3
    
  },
  draggableContainer: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 8,
    margin: 6,
    overflow: "hidden",
    backgroundColor: 'lightgreen',
    
  },
  draggableContainerSwap: {
    paddingTop: 4,
    paddingLeft: 4,
    paddingBottom: 0,
    paddingRight: 4,
    height: 30,
    borderWidth: 2,
    borderColor: "red",
   
  },
  textInDraggable: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    
  },

})
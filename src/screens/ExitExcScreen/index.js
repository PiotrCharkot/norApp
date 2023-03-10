import { View, Text, Dimensions, Easing, Animated, StyleSheet } from 'react-native'
import React, {useState, useEffect, useRef, useCallback}  from 'react'
import { onAuthStateChanged  } from 'firebase/auth';
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where, doc, setDoc, updateDoc } from "firebase/firestore";
import { authentication } from '../../../firebase/firebase-config';
import uuid from 'react-native-uuid';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { withAnchorPoint } from 'react-native-anchor-point';
import GradientButton from '../../components/buttons/GradientButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pointsToScore = 200;
const rotationTime = 300;

const usersPointsCollection = collection(db, 'usersPoints');

const ExitExcScreen = ({route}) => {

  const { userPoints, allPoints } = route.params;

  const [indicatotValue, setIndicatorValue] = useState(0);
  const [userId, setUserId] = useState('userId');
  const [userName, setUserName] = useState('')
  const [currentDailyScore, setCurrentDailyScore] = useState(0);
  const [daysInRowVal, setDaysInRowVal] = useState(0);
  const [lastUpdateVal, setLastUpdateVal] = useState('');
  const [totalPointsVal, setTotalPointsVal] = useState(0);
  const [weeklyPointsVal, setWeeklyPointsVal] = useState(0);
  const [documentId, setDocumentId] = useState('tempid');
  const [showLineOffset, setShowLineOffset] = useState(false);
  const [dayUp, setDayUp] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true)

  const interpolatedValue = useRef(new Animated.Value(-180)).current;
  const interpolatedValueFlipFirst = useRef(new Animated.Value(0)).current;
  const interpolatedValueFlipSecond = useRef(new Animated.Value(-90)).current;
  const lineOffset = useRef(new Animated.Value(currentDailyScore - pointsToScore)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

    
  const docRef = doc(db, "usersPoints", documentId);

  const rotateVal = interpolatedValueFlipFirst.interpolate({
    inputRange: [0, 90],
    outputRange: ["0deg", "90deg"]
  })

  const rotateValTrans = interpolatedValueFlipSecond.interpolate({
      inputRange: [-90, 0],
      outputRange: ["-90deg", "0deg"]
  })

  const coverPositionDeg = interpolatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
  })

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
        
      if (authUser) {

        if (authUser.isAnonymous) {
          setUserName('Guest');
        } else {
          setUserName(authUser.displayName);
        }

        setUserId(authUser.uid)

      }
    });

    return unscubscribe;
  }, [])


  useEffect(() => {

    let docId = uuid.v4();

    const setDataToFb = async () => {
      await setDoc(doc(db, 'usersPoints', docId), {
        userRef: userId,
        userName: userName,
        totalPoints: userPoints,
        weeklyPoints: userPoints,
        dailyPoints: userPoints,
        daysInRow: 0,
        lastUpdate: new Date().toLocaleDateString()
      });

      setShowLineOffset(true);
    }

    


    const getDataFb = async () => {

      const q = query(usersPointsCollection, where('userRef', '==', userId))
      const querySnapshot = await getDocs(q);
      

      if (querySnapshot.empty) {
        console.log('setting new points for user in data base now');
        setDataToFb();
      } else {
    
        setIsNewUser(false);
        console.log('user exist in data base');
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " !!!=> ", doc.data().dailyPoints);
          if (doc.data().lastUpdate !== new Date().toLocaleDateString()) {
            setCurrentDailyScore(0);
          } else {
            setCurrentDailyScore(doc.data().dailyPoints);
          }
          setDaysInRowVal(doc.data().daysInRow);
          setTotalPointsVal(doc.data().totalPoints);
          setLastUpdateVal(doc.data().lastUpdate);
          setWeeklyPointsVal(doc.data().weeklyPoints);
          setDocumentId(doc.id);
          setShowLineOffset(true);
        });
      }
        
        

    }

    if (userId !== 'userId') {

      getDataFb();
    }



    return () => {
        getDataFb;
    };
  }, [userId])



  useEffect(() => {

    let resultIndicatorValue = -180 + userPoints / allPoints * 180;
    setIndicatorValue(Math.floor(userPoints / allPoints * 100))

    console.log('setting new points exit screen', userPoints,'/', allPoints );
    Animated.timing(interpolatedValue, {
        toValue: resultIndicatorValue,
        duration: 3000,
        speed: 1,
        delay: 300,
        easing: Easing.bezier(.35,-0.01,.63,1),
        bounciness: 12,
        useNativeDriver: true,
    }).start();
    
    Animated.timing(buttonOpacity, {
      toValue: 1,
      delay: 1300,
      duration: 1000,
      useNativeDriver: true
    }).start();

    
    
  }, [])


  useEffect(() => {
    if (showLineOffset) {
      console.log('curent score in use effect: ', currentDailyScore, lineOffset);

      if (currentDailyScore >= pointsToScore) {
        setDayUp(true);
      }

      if (currentDailyScore < pointsToScore && currentDailyScore + userPoints >= pointsToScore) {

        Animated.timing(interpolatedValueFlipFirst, {
          toValue: 90,
          duration: rotationTime,
          delay: 4100,
          easing: Easing.bezier(.49,.13,1,1),
          useNativeDriver: true
        }).start();
        Animated.timing(interpolatedValueFlipSecond, {
            toValue: 0,
            duration: rotationTime,
            delay: rotationTime + 4100,
            easing: Easing.bezier(.67,1.08,1,1),
            useNativeDriver: true
        }).start();

        setTimeout(() => {
          setDayUp(true);
        }, 4100);
      }

      console.log('lineofset cal', lineOffset);
      Animated.sequence([
        Animated.timing(lineOffset, {
          toValue: currentDailyScore - pointsToScore >= 0 ? 0 : currentDailyScore - pointsToScore,
          duration: 100,
          speed: 1,
          delay: 0,
          easing: Easing.bezier(.35,-0.01,.63,1),
          useNativeDriver: true,
        }),
  
        Animated.timing(lineOffset, {
          toValue: currentDailyScore - pointsToScore + userPoints >= 0 ? 0 : currentDailyScore - pointsToScore + userPoints,
          duration: 4000,
          speed: 1,
          delay: 0,
          easing: Easing.bezier(.35,-0.01,.63,1),
          useNativeDriver: true,
        })
      ]).start();


      if (!isNewUser) {
        updateDoc(docRef, {
          dailyPoints: lastUpdateVal === new Date().toLocaleDateString() ? currentDailyScore + userPoints : userPoints,
          totalPoints: totalPointsVal + userPoints,
          lastUpdate: new Date().toLocaleDateString(),
          daysInRow: currentDailyScore < pointsToScore && currentDailyScore + userPoints >= pointsToScore ? daysInRowVal + 1 : daysInRowVal
        })
        .then(docRef => {
            console.log("A New Document Field has been added to an existing document");
        })
        .catch(error => {
            console.log(error);
        })
      }
      
     
    }
    
    
  }, [showLineOffset])
  




  const getTransform = (viewHeight, viewWidth, transValA, transValB, valX, valY) => {
      let transform = {
          transform: [{ perspective: 100 }, transValA, transValB],
      };
      return withAnchorPoint(transform, { x: valX, y: valY }, { width: viewWidth, height: viewHeight});
  };

  const goToMain = () => {
    console.log('routing to main');
  }
    

  return (

    <View style={styles.mainContainer}>

    
      <View style={styles.topView}>
        <View style={styles.topLeftView}>
          <Text style={styles.numbersTxt}>+ {userPoints}</Text>
          <Text style={styles.resultsTxt}>points</Text>
        </View>
        <View style={styles.topRightView}>
          <View >

            <Animated.View style={{...styles.numberHolder, transform: [{perspective: 500}, {rotateY: rotateVal}]}}>
              <Text style={styles.numbersTxt}>{daysInRowVal}</Text>
            </Animated.View>
            <Animated.View style={{transform: [{perspective: 500}, {rotateY: rotateValTrans}]}}>
              <Text style={styles.numbersTxt}>{daysInRowVal + 1}</Text>
            </Animated.View>
          </View>
        <Text style={styles.resultsTxt}>days in a row</Text>
        </View>

      </View>
      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View style={styles.mainMaskContainer}>
            <View style={{
              ...styles.circleIndicator, 
              alignItems: indicatotValue > 55 ? 'center' : 'flex-start', 
              paddingTop: indicatotValue > 55 ? 35 : indicatotValue > 30 ? 50 : 70, 
              paddingLeft: indicatotValue > 55 ? 0 : indicatotValue > 30 ? 40 : 20 }}>
              <Text style={styles.resultPecentText}>{indicatotValue }%</Text>
            </View>
          </View>
        }
        >
        
        <View style={styles.mainBackgroundContainer}>

          
          <LinearGradient colors={['#16A085', '#F4D03F']} start={[0.1, 0.5]} end={[0.9, 0.5]} style={styles.indicatorGradient} />
        


          <Animated.View style={{
            ...styles.animatedView,
            ...getTransform(screenWidth, screenWidth, { rotate: coverPositionDeg }, { translateX: 0 }, 0.5, 0)
          }}>

            <LinearGradient colors={[ 'rgba(255,255,255,0)',  'white']} start={[1.0, 0.0]} end={[1.0, 0.03]} style={styles.animatedViewGradient} />
            
          </Animated.View>

          
          <View style={styles.bottomCoverView} >
          </View>
          
        </View>

        
      </MaskedView>
      <View style={styles.bottomView}>
        
        <View style={styles.buttonsContainer}>
          <Animated.View style={{...styles.buttonView, opacity: buttonOpacity}}>
          <GradientButton  
          height={40} 
          width={screenWidth / 1.5 }
          colorA={'#485563'} 
          colorB={'#29323c'} 
          callbackFunc={goToMain} 
          path={'forgot'} 
          colorIcon={'white'}
          heightIcon={15} 
          widthIcon={15}
          fontSize={20}
          noText={false}
          text={' go to main'}
          colorText={'white'}
          startGradient={[1.0, 0.0]}
          endGradient={[1.0, 1.0]}
          borderTopRightRadius={20} 
          borderTopLeftRadius={20} 
          borderBottomRightRadius={20} 
          borderBottomLeftRadius={20}
          />
          </Animated.View>
          <Animated.View style={{...styles.buttonView, opacity: buttonOpacity}}>
          <GradientButton  
          height={40} 
          width={screenWidth / 1.5 }
          colorA={'#485563'} 
          colorB={'#29323c'} 
          callbackFunc={goToMain} 
          path={'forgot'} 
          colorIcon={'white'}
          heightIcon={15} 
          widthIcon={15}
          fontSize={20}
          noText={false}
          text={' check '}
          colorText={'white'}
          startGradient={[1.0, 0.0]}
          endGradient={[1.0, 1.0]}
          borderTopRightRadius={20} 
          borderTopLeftRadius={20} 
          borderBottomRightRadius={20} 
          borderBottomLeftRadius={20} 
          />
          </Animated.View>
        </View>

                 
        


        <View style={{...styles.dayProgressContainer, shadowColor: dayUp ? 'yellow' : 'transparent'}}>
          <View style={styles.progressLine}>
            <Animated.View style={{...styles.progress, width: pointsToScore, transform: [{translateX: lineOffset}], borderColor: dayUp ? 'yellow' : 'transparent' }}></Animated.View>
          </View>

        </View>
        <Text>Today score: {currentDailyScore + userPoints}</Text>

      </View>
      
    </View>
  )
}

export default ExitExcScreen


const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'white',
  },
  topView: {
    height: screenHeight / 4,
    flexDirection: 'row',
    paddingTop: 100,
  },
  numbersTxt:{ 
    fontSize: 45,
    color: 'grey'
  },
  numberHolder: {
    position: 'absolute',
  },
  resultsTxt: {
    fontSize: 20,
    marginTop: 5
  },
  topLeftView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMaskContainer: {
    backgroundColor: 'transparent',
    height: screenHeight / 2,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIndicator: {
    height: screenWidth - 100,
    width: screenWidth - 100,
    borderRadius: (screenWidth - 100 / 2),
    backgroundColor: 'transparent',
    borderWidth: 40,
    borderColor: 'black',
    
    justifyContent: 'flex-start',
    
  },
  resultPecentText: {
    fontSize: 30,
    fontWeight: '700'
  },
  indicatorGradient: {
    height: '50%'
  },
  animatedView: {
    height: screenWidth,
    width: screenWidth,
    position: 'absolute',
    alignItems: 'center',
    borderTopColor: '#E5E5BE',
    top: screenHeight / 4 + 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  animatedViewGradient: {
    height: '100%', 
    width: '100%'
  },
  mainBackgroundContainer: {
    height: '100%',
    width: '100%',
  },
  bottomCoverView: {
    height: '50%', 
    backgroundColor: 'transparent', 
    borderTopWidth: 2, 
    borderTopColor: 'darkred'
  },
  bottomView: {
    height: screenHeight / 4,
    alignItems: 'center'
  },
  dayProgressContainer: {
    marginTop: -screenHeight / 8 - 100,
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5
  },
  progressLine: {
    height: 10,
    width: pointsToScore,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
    
  },
  progress: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#283c86',
    borderWidth: 1,
    
  },
  buttonView: {
    marginTop: 10
  }
})

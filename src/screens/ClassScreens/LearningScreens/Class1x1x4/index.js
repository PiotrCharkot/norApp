import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ProgressBar from '../../../../components/bars/progressBar'
import BottomBar from '../../../../components/bars/bottomBar'

const currentScreen = 4;


const Class1x1x4 = ({route}) => {

  
    const {userPoints,  latestScreen, comeBackRoute} = route.params
    
    console.log('points last screen in 4: ' , userPoints );

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
      <ProgressBar screenNum={4} totalLenghtNum={8} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>
          <View style={styles.topView}>
            <Text style={styles.title}>Screen nr 4</Text>
          </View>

          <View style={styles.middleView}>
            <Text style={styles.text}>
            It isn't really a good idea to be extending native prototypes though, it is generally considered a bad practice that a lot of people just recommend against doing so entirely as there are safer ways that are just as good. There is a SO discussion on the topic here, but every JS programming book I've read has strongly recommended against it. For OPs problem I usually just do
            </Text>
          </View>
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Main'}
        linkPrevious={'Class1x1x3'} 
        buttonWidth={45}
        buttonHeight={45}
        userPoints={currentPoints}
        latestScreen={latestScreenDone}
        currentScreen={currentScreen}
        comeBack={comeBack}
        />
      </View>
    </View>
  )
}

export default Class1x1x4

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
  middleView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  
})
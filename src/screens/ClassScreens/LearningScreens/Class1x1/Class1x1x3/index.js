import {View, Text, StyleSheet, ScrollView, Dimensions, StatusBar, TouchableOpacity, Image, SafeAreaView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from '../../../../../components/bars/progressBar'
import BottomBar from '../../../../../components/bars/bottomBar'
import Draggable from '../../../../../components/other/Draggable'
import generalStyles from '../../../../../styles/generalStyles';


const currentScreen = 3;


const Class1x1x3 = ({ route }) => {

    const {userPoints, latestScreen, comeBackRoute, allScreensNum} = route.params
    
    console.log('points 3 screen: ' , userPoints );
    const [currentPoints, setCurrentPoints] = useState(userPoints);
    const [latestScreenDone, setLatestScreenDone] = useState(currentScreen);
    const [comeBack, setComeBack] = useState(false);
    


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

    


    

  return (
    <View style={styles.mainContainer}>
      <ProgressBar screenNum={currentScreen} totalLenghtNum={allScreensNum} latestScreen={latestScreenDone} comeBack={comeBackRoute}/>
        <View style={styles.body}>

          <View style={styles.textContainer}>
            <Text style={styles.text}>As to create sentence in present tens we drop letter 'å' before verb and we add letter 'r' to the end of it.</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>We create most of verb like this:</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>å vente - venter</Text>
            <Text style={styles.text}>to wait</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>å gjenta - gjentar</Text>
            <Text style={styles.text}>to repeat</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>å gå - går</Text>
            <Text style={styles.text}>to go</Text>
          </View>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>å spise - spiser</Text>
            <Text style={styles.text}>to eat</Text>
          </View>

            
        </View>
    

      <View style={styles.bottomBarContainer}>
        <BottomBar 
        linkNext={'Class1x1x4'}
        linkPrevious={'Class1x1x2'} 
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

export default Class1x1x3

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
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20
  },
  text: {
    fontSize: generalStyles.screenTextSize,
    fontWeight: '400',
  },
  questionText: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  exampleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: generalStyles.exampleBackgroundColor,
    borderRadius: 6
  },
  exampleText: {
    fontSize: generalStyles.exampleTextSize,
    fontWeight: generalStyles.exampleTextWeight,
  },
  
})


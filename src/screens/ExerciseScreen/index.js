import { View, Text, Image, Animated, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import styles from './style'
import Card from '../../components/cards/Card';
import CardExerciseList from '../../components/cards/CardExerciseList';
import exerciseData from '../../listData/exerciseData';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth * 0.6 + 20;
const spacerSize = (screenWidth - cardSize) / 2;
const colorsBackFlatlist = ['#ffd7d4', '#ffebd4', '#feffd4', '#e6ffd4', '#d4ffdc', '#d4fffd', '#d4d7ff', '#f4d4ff', '#ffd4f3']
const colorsBackFlatlist2 = ['#f21d1d', '#ebf21d', '#32f21d', '#1deef2', '#1d2bf2', '#d21df2', '#f21d72']
const colorsBackFlatlist3 = ['#e6746e', '#e6e46e', '#7ae66e', '#6ee6e2', '#6e7ae6', '#e26ee6', '#e6746e', '#e6e46e', '#7ae66e', '#6ee6e2', '#6e7ae6', '#e26ee6']
const colorsBackFlatlist4 = ['#fccccc', '#fafccc', '#d2fccc', '#ccfcfc', '#ccd0fc', '#f8ccfc', '#fccccc', '#fafccc', '#d2fccc', '#ccfcfc', '#ccd0fc', '#f8ccfc']
const colorsBackFlatlist5 = ['#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac', '#f9faac', '#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac', '#f9faac',]
const transparent = 'rgba(255,255,255,0)';


const ExerciseScreen = () => {
   
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const overlayOffset = useRef(new Animated.Value(0)).current;

  const [dataFlatList, setDataFlatList] = useState([])

  const opacityImgBlur = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, 1]
  });

  const scaleImgOnDrag = scrollY.interpolate({
    inputRange: [-60, 0, 60],
    outputRange: [1.5, 1, 1],
    extrapolateRight: "clamp",
  });

  const backgroundFlatlist = scrollX.interpolate({
    inputRange: colorsBackFlatlist5.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist5.map((i) => i)
  })


  useEffect(() => {
    setDataFlatList([{key: 'left-spacer'}, ...exerciseData, {key: 'right-spacer'}])
  }, [])

  useEffect(() => {

    if (isFocused) {
      Animated.sequence([
        
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true
        }),
    
        Animated.timing(overlayOffset, {
          toValue: -screenWidth,
          duration: 10,
          useNativeDriver: true
        }),
    
      ]).start()
    } else {
      Animated.sequence([
        Animated.timing(overlayOffset, {
          toValue: 0,
          duration: 10,
          useNativeDriver: true
        }),
    
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 10,
          useNativeDriver: true
        }),
      ]).start()
      
    }
    
  }, [isFocused])


  const renderCard = ({item, index}) => {

    let colorSqu = colorsBackFlatlist5[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY}]}}>

      <CardExerciseList 
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}/>
    </Animated.View>
  }

  const sendToPro = () => {
    console.log('send to upgrade');
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.head}>
        <View style={styles.headBottom}>
          <View style={styles.readingButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Reading')}>
              <Text style={styles.textButton}>Reading</Text>
              <Image style={styles.bookPic} source={require('../../../assets/book.png')} />
            </TouchableOpacity>
          </View>
        
          <View style={styles.readingButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={sendToPro}>
              <Text style={styles.textButton}>upgrade to Pro</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      <Animated.ScrollView onScroll={Animated.event(
        [{nativeEvent: {contentOffset: { y: scrollY}}}], 
        {useNativeDriver: true}
        )}
      scrollEventThrottle={16}
      >

        <Animated.Image style={{...styles.mainImg, transform: [{scale: scaleImgOnDrag}]}} source={require('../../../assets/reindeerMid2.png')}/>
        <Animated.Image style={{...styles.mainImg, opacity: opacityImgBlur}} source={require('../../../assets/reindeerMid2Blurred.png')}/>
        <Animated.View style={{...styles.gradientContainer, transform: [{scale: scaleImgOnDrag}]}}>

        <LinearGradient colors={['white', transparent, transparent, transparent, transparent, 'white']} start={[0.0, 0.0]} end={[0.0, 1.0]}  style={{...styles.gradinetImg}}>
        </LinearGradient>
        </Animated.View>
      
        <Animated.View style={{...styles.flatListsContainer, backgroundColor: backgroundFlatlist}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Title</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList}
            renderItem={renderCard}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false}
              )}
            scrollEventThrottle={16}
          />

        </Animated.View>
      </Animated.ScrollView>
        
      
      <Animated.View style={{...styles.whiteOverlay, opacity: overlayOpacity, transform: [{translateX: overlayOffset}]}}></Animated.View>
    </View>
  )
}

export default ExerciseScreen
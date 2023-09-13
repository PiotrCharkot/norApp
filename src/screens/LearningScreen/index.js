import { View, Text, Animated, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useState, useRef, useEffect, useCallback} from 'react'
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase-config'
import { authentication } from '../../../firebase/firebase-config';
import { onAuthStateChanged  } from 'firebase/auth';
import uuid from 'react-native-uuid';
import styles from './style';
import Card from '../../components/cards/Card';
import CardBlack from '../../components/cards/CardBlack';
import learningData1 from '../../listData/learningData1';
import learningData2 from '../../listData/learningData2';
import learningData3 from '../../listData/learningData3';
import learningData4 from '../../listData/learningData4';
import learningData5 from '../../listData/learningData5';
import learningData6 from '../../listData/learningData6';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth * 0.6 + 20;
const spacerSize = (screenWidth - cardSize) / 2;

const colorsBackFlatlist = ['#f2d891', '#96f291', '#9aedd4', '#91c8f2', '#f291df', '#f29191', '#f2ae91']
const colorsBackFlatlist2 = ['#f21d1d', '#ebf21d', '#32f21d', '#1deef2', '#1d2bf2', '#d21df2', '#f21d72']
const colorsBackFlatlist3 = ['#f9faac', '#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac', '#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac']
const colorsBackFlatlist4 = ['#fccccc', '#fafccc', '#d2fccc', '#ccfcfc', '#ccd0fc', '#f8ccfc', '#fccccc', '#fafccc', '#d2fccc', '#ccfcfc', '#ccd0fc', '#f8ccfc']
const colorsBackFlatlist5 = ['#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac', '#f9faac', '#b0faac', '#acf9fa', '#b4acfa', '#faacf3', '#faacac', '#f9faac',]
const transparent = 'rgba(255,255,255,0)'

const usersAchivments = collection(db, 'usersAchivments');

const LearningScreen = () => {


  const isFocused = useIsFocused();
  const navigation = useNavigation();
  
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const scrollX3 = useRef(new Animated.Value(0)).current;
  const scrollX4 = useRef(new Animated.Value(0)).current;
  const scrollX5 = useRef(new Animated.Value(0)).current;
  const scrollX6 = useRef(new Animated.Value(0)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const overlayOffset = useRef(new Animated.Value(0)).current;

  const [userId, setUserId] = useState('userId');
  const [dataFlatList, setDataFlatList] = useState([]);
  const [dataFlatList2, setDataFlatList2] = useState([]);
  const [dataFlatList3, setDataFlatList3] = useState([]);
  const [dataFlatList4, setDataFlatList4] = useState([]);
  const [dataFlatList5, setDataFlatList5] = useState([]);
  const [dataFlatList6, setDataFlatList6] = useState([]);
  const [random, setRandom] = useState(0);

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

  const backgroundFlatlist2 = scrollX2.interpolate({
    inputRange: colorsBackFlatlist4.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist4.map((i) => i)
  })

  const backgroundFlatlist3 = scrollX3.interpolate({
    inputRange: colorsBackFlatlist3.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist3.map((i) => i)
  })

  const backgroundFlatlist4 = scrollX4.interpolate({
    inputRange: colorsBackFlatlist5.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist5.map((i) => i)
  })

  const backgroundFlatlist5 = scrollX5.interpolate({
    inputRange: colorsBackFlatlist4.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist4.map((i) => i)
  })

  const backgroundFlatlist6 = scrollX6.interpolate({
    inputRange: colorsBackFlatlist3.map((_, i) => i * cardSize),
    outputRange: colorsBackFlatlist3.map((i) => i)
  })


  
  const imagesMain = [require('../../../assets/reindeerRobo1.png'), require('../../../assets/reindeerRobo2.png'), require('../../../assets/reindeerRobo3.png'), require('../../../assets/reindeerRobo4.png'), require('../../../assets/reindeerRobo5.png'), require('../../../assets/reindeerRobo6.png')];
  const imagesMainBlurred = [require('../../../assets/reindeerRobo1Blurred.png'), require('../../../assets/reindeerRobo2Blurred.png'), require('../../../assets/reindeerRobo3Blurred.png'), require('../../../assets/reindeerRobo4Blurred.png'), require('../../../assets/reindeerRobo5Blurred.png'), require('../../../assets/reindeerRobo6Blurred.png')];


  useEffect(() => {
    const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
        
      if (authUser) {

        setUserId(authUser.uid)
      }
    });
    

    return unscubscribe;
  }, [])


  

  useEffect(() => {
    let tempVal = Math.floor(Math.random() * imagesMain.length);
    setRandom(tempVal);
    
    
    setDataFlatList([{key: 'left-spacer'}, ...learningData1, {key: 'right-spacer'}])
    setDataFlatList2([{key: 'left-spacer'}, ...learningData2, {key: 'right-spacer'}])
    setDataFlatList3([{key: 'left-spacer'}, ...learningData3, {key: 'right-spacer'}])
    setDataFlatList4([{key: 'left-spacer'}, ...learningData4, {key: 'right-spacer'}])
    setDataFlatList5([{key: 'left-spacer'}, ...learningData5, {key: 'right-spacer'}])
    setDataFlatList6([{key: 'left-spacer'}, ...learningData6, {key: 'right-spacer'}])
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


  useFocusEffect(
    useCallback(() => {

      
      if (userId !== 'userId') {

        getDataFb();
      }
  
      
    }, [userId])
  );


  const setDataToFb = async () => {

    let docId = uuid.v4();


    await setDoc(doc(db, 'usersAchivments', docId), {
      userRef: userId,
      learning: {
        section1: [0,0,0,0,0,0],
        section2: [0,0,0,0,0],
        section3: [0,0,0,0,0],
        section4: [0,0,0,0,0],
        section5: [0,0,0,0,0],
        section6: [0,0,0,0,0],
      },
      exercise: {
        section1: [0,0,0,0,0],
        section2: [0,0,0,0,0],
        section3: [0,0,0,0,0],
        section4: [0,0,0,0,0],
        section5: [0,0,0,0,0],
        section6: [0,0,0,0,0],
      },
      gold: 0,
      silver: 0,
      bronze: 0,

    });
  }


  const getDataFb = async () => {


    const q = query(usersAchivments, where('userRef', '==', userId))
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      setDataToFb();
      console.log('no user in db yet');
    } else {
      console.log('user exist in data base');
    }
    
    querySnapshot.forEach((doc) => {
      
      for (let i = 0; i < doc.data().learning.section1.length; i++) {
        
        learningData1[i].stars = doc.data().learning.section1[i]
      }

      for (let i = 0; i < doc.data().learning.section2.length; i++) {
        
        learningData2[i].stars = doc.data().learning.section2[i]
      }
      
      for (let i = 0; i < doc.data().learning.section3.length; i++) {
        
        learningData3[i].stars = doc.data().learning.section3[i]
      }

      for (let i = 0; i < doc.data().learning.section4.length; i++) {
        
        learningData4[i].stars = doc.data().learning.section4[i]
      }

      for (let i = 0; i < doc.data().learning.section5.length; i++) {
        
        learningData5[i].stars = doc.data().learning.section5[i]
      }

      for (let i = 0; i < doc.data().learning.section6.length; i++) {
        
        learningData6[i].stars = doc.data().learning.section6[i]
      }

      setDataFlatList([{key: 'left-spacer'}, ...learningData1, {key: 'right-spacer'}])
      setDataFlatList2([{key: 'left-spacer'}, ...learningData2, {key: 'right-spacer'}])
      setDataFlatList3([{key: 'left-spacer'}, ...learningData3, {key: 'right-spacer'}])
      setDataFlatList4([{key: 'left-spacer'}, ...learningData4, {key: 'right-spacer'}])
      setDataFlatList5([{key: 'left-spacer'}, ...learningData5, {key: 'right-spacer'}])
      setDataFlatList6([{key: 'left-spacer'}, ...learningData6, {key: 'right-spacer'}])
    });

  }



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

    const translateY1 = scrollX.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY1}]}}>

      <CardBlack
      color1={'#FF2E4C'}
      color2={'#333333'}
      color3={'#7affff'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
    </Animated.View>
  }

  const renderCard2 = ({item, index}) => {

    let colorSqu = colorsBackFlatlist4[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY2 = scrollX2.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY2}]}}>

      <CardBlack 
      color1={'#e9d362'}
      color2={'#333333'}
      color3={'#fffa96'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
    </Animated.View>
  }

  const renderCard3 = ({item, index}) => {

    let colorSqu = colorsBackFlatlist3[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY3 = scrollX3.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY3}]}}>

      <CardBlack 
      color1={'#73C8A9'}
      color2={'#333333'}
      color3={'#ff94f6'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
    </Animated.View>
  }

  const renderCard4 = ({item, index}) => {

    let colorSqu = colorsBackFlatlist5[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY4 = scrollX4.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY4}]}}>

      <CardBlack 
      color1={'#3a7bd5'}
      color2={'#333333'}
      color3={'#9cffa2'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
    </Animated.View>
  }

  const renderCard5 = ({item, index}) => {

    let colorSqu = colorsBackFlatlist5[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY5 = scrollX5.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY5}]}}>

      <CardBlack
      color1={'#3a7bd5'}
      color2={'#333333'}
      color3={'#ffa6a6'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
    </Animated.View>
  }

  const renderCard6 = ({item, index}) => {

    let colorSqu = colorsBackFlatlist5[index - 1]

    if (!item.title) {
      return <View style={{width: spacerSize}} ></View>
    }
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index  * cardSize,
    ];

    const translateY6 = scrollX6.interpolate({
      inputRange,
      outputRange: [0, -50, 0]
    })

    return <Animated.View style={{transform: [{translateY: translateY6}]}}>

      <CardBlack 
      color1={'#3a7bd5'}
      color2={'#333333'}
      color3={'#ffffff'}
      title={item.title} 
      description={item.description} 
      level={item.level} 
      link={item.link} 
      showPro={item.showPro}
      colorSmallSqu={colorSqu}
      stars={item.stars}/>
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

        <Animated.Image style={{...styles.mainImg, transform: [{scale: scaleImgOnDrag}]}} source={imagesMain[random]}/>
        <Animated.Image style={{...styles.mainImg, opacity: opacityImgBlur}} source={imagesMainBlurred[random]}/>
        <Animated.View style={{...styles.gradientContainer, transform: [{scale: scaleImgOnDrag}]}}>

        <LinearGradient colors={['white', transparent, transparent, transparent, transparent, 'white']} start={[0.0, 0.0]} end={[0.0, 1.0]}  style={{...styles.gradinetImg}}>
        </LinearGradient>
        </Animated.View>
      
        <Animated.View style={{...styles.flatListsContainer, backgroundColor: backgroundFlatlist}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 200, left: screenWidth / 2 - 100}}>
            <Text style={styles.titleText}>Grammatisk tid</Text>
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

        <Animated.View style={{...styles.flatListsContainerBottom, backgroundColor: backgroundFlatlist2}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 120, left: screenWidth / 2 - 60}}>
            <Text style={styles.titleText}>Verb</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList2}
            renderItem={renderCard2}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX2}}}],
              {useNativeDriver: false}
            )}
            scrollEventThrottle={16}
          />

        </Animated.View>

        <Animated.View style={{...styles.flatListsContainerBottom, backgroundColor: backgroundFlatlist3}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 160, left: screenWidth / 2 - 80}}>
            <Text style={styles.titleText}>Substantiv</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList3}
            renderItem={renderCard3}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX3}}}],
              {useNativeDriver: false}
            )}
            scrollEventThrottle={16}
          />

        </Animated.View>

        <Animated.View style={{...styles.flatListsContainerBottom, backgroundColor: backgroundFlatlist4}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 220, left: screenWidth / 2 - 110}}>
            <Text style={styles.titleText}>Adjektiv og Adverb</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList4}
            renderItem={renderCard4}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX4}}}],
              {useNativeDriver: false}
            )}
            scrollEventThrottle={16}
          />

        </Animated.View>

        <Animated.View style={{...styles.flatListsContainerBottom, backgroundColor: backgroundFlatlist5}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 280, left: screenWidth / 2 - 140}}>
            <Text style={styles.titleText}>Pronomen og Determinativ</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList5}
            renderItem={renderCard5}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX5}}}],
              {useNativeDriver: false}
            )}
            scrollEventThrottle={16}
          />

        </Animated.View>

        <Animated.View style={{...styles.flatListsContainerLast, backgroundColor: backgroundFlatlist6}}>
          
          <LinearGradient colors={['white', 'rgba(255,255,255,0)', 'white']} start={[0.0, 0.1]} end={[0.0, 1.0]}  style={styles.gradinetFlatlist}>
            </LinearGradient>
        
          <View style={{...styles.titleContainer, width: 220, left: screenWidth / 2 - 110}}>
            <Text style={styles.titleText}>Setningsstruktur</Text>
          </View>
          <Animated.FlatList 
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardSize}
            decelerationRate={0}
            data={dataFlatList6}
            renderItem={renderCard6}
            keyExtractor={(item) => item.key}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX6}}}],
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

export default LearningScreen
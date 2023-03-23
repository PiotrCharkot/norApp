import { View, Text, Image, Animated, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';
import { useIsFocused } from "@react-navigation/native";
import { onAuthStateChanged  } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where, doc, setDoc } from "firebase/firestore";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'
import { authentication } from '../../../firebase/firebase-config';
import uuid from 'react-native-uuid';
import CardFlashList from '../../components/cards/CardFlashList';


const screenWidth = Dimensions.get('window').width;
const cardHeight = screenWidth * 0.5
const transparent = 'rgba(255,255,255,0)';

const usersWordsInfo = collection(db, 'usersWordsInfo');

const FlashcardScreen = () => {
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const scaleLanguageHight = useRef(new Animated.Value(0)).current;
  const translateLanguage = useRef(new Animated.Value(50)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const overlayOffset = useRef(new Animated.Value(0)).current;


  const [choosenLanguage, setChoosenLanguage] = useState('EN');
  const [languageListOpen, setLanguageListOpen] = useState(false);
  const [userId, setUserId] = useState('userId');

  const opacityImgBlur = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, 1]
  });

  const scaleImgOnDrag = scrollY.interpolate({
    inputRange: [-60, 0, 60],
    outputRange: [1.5, 1, 1],
    extrapolateRight: "clamp",
  });

  const scaleCardHolder = scrollY.interpolate({
    inputRange: [-cardHeight, 0, cardHeight],
    outputRange: [0.8, 1, 0.8],
    
  });

  const scaleCardHolder2 = scrollY.interpolate({
    inputRange: [ 0, cardHeight, cardHeight * 2],
    outputRange: [0.8, 1, 0.8],
    
  });


  const scaleCardHolder3 = scrollY.interpolate({
    inputRange: [ cardHeight, cardHeight * 2 , cardHeight * 3],
    outputRange: [0.8, 1, 0.8],
    
  });

  const scaleCardHolder4 = scrollY.interpolate({
    inputRange: [ cardHeight * 2, cardHeight * 3 , cardHeight * 4],
    outputRange: [0.8, 1, 0.8],
    
  });

  const scaleCardHolder5 = scrollY.interpolate({
    inputRange: [ cardHeight * 3, cardHeight * 4 , cardHeight * 5],
    outputRange: [0.8, 1, 0.8],
    
  });

  const scaleCardHolder6 = scrollY.interpolate({
    inputRange: [ cardHeight * 4, cardHeight * 5 , cardHeight * 6],
    outputRange: [0.8, 1, 0.8],
    
  });
  

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      console.log("Here's your value", result);
      setChoosenLanguage(result);
    } else {
      console.log('No values stored under that key.');
    }
  }


  const changeLanguage = (language) => {
    if (language !== null) {
      setChoosenLanguage(language);
      save('language', language);
    }
    if (!languageListOpen) {
      setLanguageListOpen(true)
      Animated.timing(scaleLanguageHight, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
      
    } else {
      setLanguageListOpen(false)
      Animated.timing(scaleLanguageHight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
    
  }



  useEffect(() => {
    const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
        
      if (authUser) {

        setUserId(authUser.uid)
      }
    });

    getValueFor('language');

    return unscubscribe;
  }, [])


  useEffect(() => {

    let docId = uuid.v4();

    const setDataToFb = async () => {
      await setDoc(doc(db, 'usersWordsInfo', docId), {
        userReference: userId,
        wordList: [
          {
            refToList: '1',
            words1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            words2: [],
            words3: [],
            words4: [],
            words5: [],
          },{
            refToList: '2',
            words1: [0, 1, 2],
            words2: [],
            words3: [],
            words4: [],
            words5: [],
          }
        ],
        
      });
    }

    const setNewWordsToFb = async () => {
      await setDoc(doc(db, 'words', docId), {
        refNum: '1',
        title: 'Nouns',
        wordsArr: [
          {
            eng:'a car',
            es: 'coche',
            key: '0',
            nor: 'en bil',
            norFull: 'bilen',
            pl: 'samochód',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_bil.mp3?alt=media&token=696daf85-b31e-41cd-a7f5-0c252bf1a6d6',
            wordId: 0
          },{
            eng:'a house',
            es: 'juicio',
            key: '1',
            nor: 'et hus',
            norFull: 'huset',
            pl: 'dom',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_hus.mp3?alt=media&token=6d8be607-0c3c-43cc-b628-db2191cc3648',
            wordId: 1
          },{
            eng:'a table',
            es: 'mesa',
            key: '2',
            nor: 'et bord',
            norFull: 'bordet',
            pl: 'stół',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_bord.mp3?alt=media&token=95d0723a-5e08-4bdb-9e5b-98876a23506b',
            wordId: 2
          },{
            eng:'a stamp',
            es: 'estampilla',
            key: '3',
            nor: 'et frimerke',
            norFull: 'frimerket',
            pl: 'znaczek',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_frimerke.mp3?alt=media&token=8becb550-211f-43e7-a8c6-ecac590974cd',
            wordId: 3
          },{
            eng:'a shop',
            es: 'tienda',
            key: '4',
            nor: 'en butikk',
            norFull: 'butikken',
            pl: 'sklep',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_butikk.mp3?alt=media&token=3081181c-468b-4a66-9b55-145fcbc7071d',
            wordId: 4
          },{
            eng:'a hospital',
            es: 'hospital',
            key: '5',
            nor: 'et sykehus',
            norFull: 'sykehuset',
            pl: 'szpital',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_sykehus.mp3?alt=media&token=760c8517-c769-4513-81c4-87beecd21c25',
            wordId: 5
          },{
            eng:'an office',
            es: 'oficina',
            key: '6',
            nor: 'et kontor',
            norFull: 'kontoret',
            pl: 'biuro',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_kontor.mp3?alt=media&token=a966fa9a-e340-4c81-aabc-a84fc941ab67',
            wordId: 6
          },{
            eng:'a factory',
            es: 'fábrica',
            key: '7',
            nor: 'en fabrikk',
            norFull: 'fabrikken',
            pl: 'fabryka',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_fabrikk.mp3?alt=media&token=c59272c1-36e6-47d6-aca5-91292b625366',
            wordId: 7
          },{
            eng:'a color',
            es: 'color',
            key: '8',
            nor: 'en farge',
            norFull: 'fargen',
            pl: 'kolor',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_farge.mp3?alt=media&token=d17fd781-788b-4aac-a6f8-f72f8ea1935a',
            wordId: 8
          },{
            eng:'a picture',
            es: 'fotografía',
            key: '9',
            nor: 'et bilde',
            norFull: 'bildet',
            pl: 'obraz',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_bilde.mp3?alt=media&token=43b07b9a-48e7-485b-9072-29ea1379a216',
            wordId: 9
          },{
            eng:'a juice',
            es: 'jugo',
            key: '10',
            nor: 'en jus',
            norFull: 'jusen',
            pl: 'sok',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_jus.mp3?alt=media&token=30cbb394-0787-4071-85ab-e7bc62ab6c89',
            wordId: 10
          },{
            eng:'a milk',
            es: 'leche',
            key: '11',
            nor: 'en melk',
            norFull: 'melken',
            pl: 'mleko',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fen_melk.mp3?alt=media&token=bbda1b82-8d7a-41a8-b689-82499fd4fa1e',
            wordId: 11
          },{
            eng:'water',
            es: 'agua',
            key: '12',
            nor: 'et vann',
            norFull: 'vannet',
            pl: 'woda',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_vann.mp3?alt=media&token=8ce0c1a2-2275-42cf-b7d0-190887105a41',
            wordId: 12
          },{
            eng:'sugar',
            es: 'azúcar',
            key: '13',
            nor: 'et sukker',
            norFull: 'sukkeret',
            pl: 'cukier',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_sukker.mp3?alt=media&token=5a896ae7-e45b-4283-9d4e-4d0e510bd670',
            wordId: 13
          },{
            eng:'an apple',
            es: 'manzana',
            key: '14',
            nor: 'et eple',
            norFull: 'eplet',
            pl: 'jabłko',
            soundLink: 'https://firebasestorage.googleapis.com/v0/b/norapp-69bd4.appspot.com/o/wordsList1%2Fet_eple.mp3?alt=media&token=be107011-def5-47aa-b5cb-fd444822fae2',
            wordId: 14
          }
        ],
        
      });
    }


    //setNewWordsToFb()

    const getDataFb = async () => {

        const q = query(usersWordsInfo, where('userReference', '==', userId))
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setDataToFb();
        } else {
          console.log('user exist in data base');
        }
        
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " !====> ", doc.data());

        });

    }

    if (userId !== 'userId') {

      getDataFb();
    }



    return () => {
        getDataFb;
    };
}, [userId])




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


  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.head}>
        <View style={styles.headBottom}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate({
              name: 'MyList',
              params: {userRef: userId}
            })}>
              <Text style={styles.textButton}>My cards</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.choosenLanguageContainer}>
            <TouchableOpacity style={styles.languageContainer} onPress={() => changeLanguage(choosenLanguage)}>
            <Text style={styles.languageText}>{choosenLanguage}</Text>
              <Image style={styles.iconLanguageImg} source={require('../../../assets/language.png')} />
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

        <View style={styles.listContainer}>
          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder}]}}>

            <CardFlashList refNummer={'1'} userIdRef={userId} title={'Nouns / A1'} language={choosenLanguage}/>
          </Animated.View>

          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder2}]}}>

            <CardFlashList refNummer={'2'} userIdRef={userId} title={'Ukedager / A1'} language={choosenLanguage}/>
          </Animated.View>

          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder3}]}}>

            <CardFlashList refNummer={'3'} userIdRef={userId} title={'Farger / A1'} language={choosenLanguage}/>
          </Animated.View>

          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder4}]}}>

            <CardFlashList refNummer={'1'} userIdRef={userId} title={'Next Card / A2'} language={choosenLanguage}/>
          </Animated.View>

          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder5}]}}>

            <CardFlashList refNummer={'2'} userIdRef={userId} title={'Next Card / B1'} language={choosenLanguage}/>
          </Animated.View>

          <Animated.View style={{...styles.cardHolder, transform: [{scale: scaleCardHolder6}]}}>

            <CardFlashList refNummer={'3'} userIdRef={userId} title={'Next Card / B2'} language={choosenLanguage}/>
          </Animated.View>

          <View style={styles.marginBottom}></View>
        </View>

        <Animated.Image style={{...styles.mainImg, transform: [{scale: scaleImgOnDrag}]}} source={require('../../../assets/reindeerBalls.png')}/>
        <Animated.Image style={{...styles.mainImg, opacity: opacityImgBlur}} source={require('../../../assets/reindeerBalls-blur.png')}/>
        <Animated.View style={{...styles.gradientContainer, transform: [{scale: scaleImgOnDrag}]}}>

        <LinearGradient colors={['white', transparent, transparent, transparent, transparent, 'white']} start={[0.0, 0.0]} end={[0.0, 1.0]}  style={{...styles.gradinetImg}}>
        </LinearGradient>
        </Animated.View>
      

      </Animated.ScrollView>
        
      <Animated.View style={{...styles.languageList, transform: [{scaleY: scaleLanguageHight}, {translateY: translateLanguage}]}}>
        <TouchableOpacity style={styles.languageContainer} onPress={() => changeLanguage('EN')}>
          <Text style={styles.languageText}>EN</Text>
          <Image style={styles.flagImg} source={require('../../../assets/united-kingdom.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageContainer} onPress={() => changeLanguage('ES')}>
          <Text style={styles.languageText}>ES</Text>
          <Image style={styles.flagImg} source={require('../../../assets/spain.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageContainer} onPress={() => changeLanguage('PL')}>
          <Text style={styles.languageText}>PL</Text>
          <Image style={styles.flagImg} source={require('../../../assets/poland.png')} />
        </TouchableOpacity>

      </Animated.View>
      <Animated.View style={{...styles.whiteOverlay, opacity: overlayOpacity, transform: [{translateX: overlayOffset}]}}></Animated.View>
    </View>
  )
}

export default FlashcardScreen
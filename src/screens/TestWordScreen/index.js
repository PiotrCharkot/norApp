import { View, Text, Animated, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where, doc, updateDoc  } from "firebase/firestore";
import * as SecureStore from 'expo-secure-store';
import styles from './style'
import CardFlippy from '../../components/cards/CardFlippy'
import { withAnchorPoint } from 'react-native-anchor-point';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth * 0.7 + 20;
const spacerSize = (screenWidth - cardSize) / 2;
let indexOfElement;


const TestWordScreen = ({route}) => {

    const {userId, refToList, savedLang, own} = route.params;

    const navigation = useNavigation();

    const words = collection(db, own ? 'wordsOwn' : 'words');
    const userWordsData = collection(db, 'usersWordsInfo');
    
    const interpolatedValueForX = useRef(new Animated.Value(0)).current;

    const [dataFlatList, setDataFlatList] = useState([{key: 'not empty'}]);
    const [showContent, setShowContent] = useState(false);
    const [serverData, setServerData] = useState([]);
    const [userWordInfo, setUserWordInfo] = useState({});
    const [allUsersArrs, setAllUsersArrs] = useState([]);
    const [documentId, setDocumentId] = useState('tempid');
    const [wordsLvlUp, setWordsLvlUp] = useState([]);
    const [wordsLvlDown, setWordsLvlDown] = useState([]);
    const [title, setTitle] = useState('');
    const [flip, setFlip] = useState(false);
    const [btnTxt, setBtnTxt] = useState('')
    const [flipOnStart, setFlipOnStart] = useState(false);
    
    const docRef = doc(db, "usersWordsInfo", documentId);

    const xPositionDeg = interpolatedValueForX.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "180deg"]
    })

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }


    async function getValueForLangSettings(key) {

        
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            if (result === 'yes') {
                setFlipOnStart(true);
                setFlip(true);
            } else {
                setFlipOnStart(false);
                setFlip(false)
            }
        } else {
            console.log('no value for this key');
        }
    }


    

    const changeSides = () => {
        
        if (flip === false) {
            save('norwegianFirst', 'yes');
            setFlip(true);
            
        } else if (flip === true) {
            save('norwegianFirst', 'no');
            setFlip(false);
            
        }
    }

    const exitButton = () => {

        
        Animated.spring(interpolatedValueForX, {
            toValue: 360,
            speed: 1,
            bounciness: 12,
            useNativeDriver: true,
        }).start();
    
        updateUsersWordInfo()
        
    
        setTimeout(() => {
    
            console.log('new object to return to fb: ', userWordInfo);
            if (own) {
                navigation.navigate({
                    name: 'MyList',
                    params: {userRef: userId}
                  })
            } else {
                navigation.navigate('Main');
            }
        }, 1500)
    }

    const getTransform = (viewHeight, viewWidth, transValA, transValB, valX, valY) => {
        let transform = {
            transform: [{ perspective: 400 }, transValA, transValB],
        };
        return withAnchorPoint(transform, { x: valX, y: valY }, { width: viewWidth * 1.5, height: viewHeight * 1.5 });
    };

    const confirmButton = (wordRef) => {
        
        setWordsLvlUp([...wordsLvlUp, wordRef])  
        console.log(wordsLvlUp);
    }

    const denyButton = (wordRef) => {
        
        setWordsLvlDown([...wordsLvlDown, wordRef])
    }

    const updateUsersWordInfo = () => {
        const numberOfWords = userWordInfo.words1.length
        + userWordInfo.words2.length
        + userWordInfo.words3.length
        + userWordInfo.words4.length
        + userWordInfo.words5.length


        for (let i = 0; i < numberOfWords; i++) {
            
          
            if (wordsLvlUp.includes(i)) {
                if (userWordInfo.words1.includes(i)) {
                    for( let j = 0; j < userWordInfo.words1.length; j++){ 
    
                        if ( userWordInfo.words1[j] === i) { 
                    
                            let removedEl = userWordInfo.words1.splice(j, 1); 

                            userWordInfo.words2.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words2.includes(i)) {
                    for( let j = 0; j < userWordInfo.words2.length; j++){ 
    
                        if ( userWordInfo.words2[j] === i) { 
                    
                            let removedEl = userWordInfo.words2.splice(j, 1); 

                            userWordInfo.words3.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words3.includes(i)) {
                    for( let j = 0; j < userWordInfo.words3.length; j++){ 
    
                        if ( userWordInfo.words3[j] === i) { 
                    
                            let removedEl = userWordInfo.words3.splice(j, 1); 

                            userWordInfo.words4.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words4.includes(i)) {
                    for( let j = 0; j < userWordInfo.words4.length; j++){ 
    
                        if ( userWordInfo.words4[j] === i) { 
                    
                            let removedEl = userWordInfo.words4.splice(j, 1); 

                            userWordInfo.words5.push(...removedEl)
                        }
                    
                    }
                } 
            } 
            
            if (wordsLvlDown.includes(i)) {
                if (userWordInfo.words5.includes(i)) {
                    for( let j = 0; j < userWordInfo.words5.length; j++){ 
    
                        if ( userWordInfo.words5[j] === i) { 
                    
                            let removedEl = userWordInfo.words5.splice(j, 1); 

                            userWordInfo.words4.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words4.includes(i)) {
                    for( let j = 0; j < userWordInfo.words4.length; j++){ 
    
                        if ( userWordInfo.words4[j] === i) { 
                    
                            let removedEl = userWordInfo.words4.splice(j, 1); 

                            userWordInfo.words3.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words3.includes(i)) {
                    for( let j = 0; j < userWordInfo.words3.length; j++){ 
    
                        if ( userWordInfo.words3[j] === i) { 
                    
                            let removedEl = userWordInfo.words3.splice(j, 1); 

                            userWordInfo.words2.push(...removedEl)
                        }
                    
                    }
                } else if (userWordInfo.words2.includes(i)) {
                    for( let j = 0; j < userWordInfo.words2.length; j++){ 
    
                        if ( userWordInfo.words2[j] === i) { 
                    
                            let removedEl = userWordInfo.words2.splice(j, 1); 

                            userWordInfo.words1.push(...removedEl)
                        }
                    
                    }
                } 
            }
        }


        allUsersArrs.splice(indexOfElement, 1, userWordInfo) //here is the problem !!

        updateDoc(docRef, {
            wordList: allUsersArrs
        })
        .then(docRef => {
            console.log("A New Document Field has been added to an existing document");
        })
        .catch(error => {
            console.log(error);
        })
        

    }


    
    const renderCard = ({item, index}) => {

        
    
        if (!item.nor) {
            return <View  style={{width: spacerSize}} ></View>
        }
        
        return <View >

            <CardFlippy key={index} wordData={item} lang={savedLang} setFlip={flip} flipFromStart={flipOnStart} callbackFunc={confirmButton} callbackFunc2={denyButton}/>
        </View>
    }

    useEffect(() => {


        const getDataFb = async () => {

            const q = query(words, where('refNum', '==', refToList))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                
                setTitle(doc.data().title)
                setServerData(doc.data().wordsArr)
                
            });

            const q2 = query(userWordsData, where('userReference', '==', userId))
            const querySnapshot2 = await getDocs(q2);
            querySnapshot2.forEach((doc) => {
                

                doc.data().wordList.map(item => {
                    if (item.refToList === refToList) {
                        setUserWordInfo(item)
                    }
                })

                indexOfElement = doc.data().wordList.findIndex( item => item.refToList === refToList)
                console.log('infooooooooo', userWordInfo);
                //setUserWordInfo(doc.data().wordList[refToList - 1])
                setAllUsersArrs(doc.data().wordList)
                setDocumentId(doc.id)
               
                setShowContent(true);
                
            })

        }

        getValueForLangSettings('norwegianFirst');

        if (savedLang === 'PL') {
            setBtnTxt('Pol');
        } else if (savedLang === 'ES') {
            setBtnTxt('Esp')
        } else if (savedLang === 'EN') {
            setBtnTxt('Eng')
        } 

        getDataFb();



        return () => {
            getDataFb;
        };
    }, [])


    useEffect(() => {
        if (showContent) {

            console.log('server data', serverData);
            let modifiedData = [];
            let justAdded = [];
            let wordNotRepeatIn = 4;

            let arr1Leng = userWordInfo.words1.length;
            let arr2Leng = userWordInfo.words2.length + arr1Leng;
            let arr3Leng = userWordInfo.words3.length + arr2Leng;
            let arr4Leng = userWordInfo.words4.length + arr3Leng;
            let arr5Leng = userWordInfo.words5.length + arr4Leng;

            let arrayAllInfo = userWordInfo.words1.concat(userWordInfo.words2, userWordInfo.words3, userWordInfo.words4, userWordInfo.words5)

            for (let i = 0; i < 15; i++) {
                
                let random1 = arrayAllInfo[Math.floor(Math.random() * arr1Leng)];

                if (!justAdded.includes(random1)) {
                    let deepCopyObj1 = JSON.parse(JSON.stringify(serverData[random1]))
                    deepCopyObj1.key = `${i.toString()}a`;
                    modifiedData.push(deepCopyObj1)
                    if (justAdded.length > wordNotRepeatIn) {
                        justAdded.shift();
                        justAdded.push(random1)
                    } else {
                        justAdded.push(random1)
                    }
                }


                let random2 = arrayAllInfo[Math.floor(Math.random() * arr2Leng)];

                if (!justAdded.includes(random2)) {
                    let deepCopyObj2 = JSON.parse(JSON.stringify(serverData[random2]))
                    deepCopyObj2.key = `${i.toString()}b`;
                    modifiedData.push(deepCopyObj2)
                    if (justAdded.length > wordNotRepeatIn) {
                        justAdded.shift();
                        justAdded.push(random2)
                    } else {
                        justAdded.push(random2)
                    }
                }


                let random3 = arrayAllInfo[Math.floor(Math.random() * arr3Leng)];

                if (!justAdded.includes(random3)) {
                    let deepCopyObj3 = JSON.parse(JSON.stringify(serverData[random3]))
                    deepCopyObj3.key = `${i.toString()}c`;
                    modifiedData.push(deepCopyObj3)
                    if (justAdded.length > wordNotRepeatIn) {
                        justAdded.shift();
                        justAdded.push(random3)
                    } else {
                        justAdded.push(random3)
                    }
                }


                let random4 = arrayAllInfo[Math.floor(Math.random() * arr4Leng)];

                if (!justAdded.includes(random4)) {
                    let deepCopyObj4 = JSON.parse(JSON.stringify(serverData[random4]))
                    deepCopyObj4.key = `${i.toString()}d`;
                    modifiedData.push(deepCopyObj4)
                    if (justAdded.length > wordNotRepeatIn) {
                        justAdded.shift();
                        justAdded.push(random4)
                    } else {
                        justAdded.push(random4)
                    }
                }

                let random5 = arrayAllInfo[Math.floor(Math.random() * arr5Leng)];

                if (!justAdded.includes(random5)) {
                    let deepCopyObj5 = JSON.parse(JSON.stringify(serverData[random5]))
                    deepCopyObj5.key = `${i.toString()}e`;
                    modifiedData.push(deepCopyObj5)
                    if (justAdded.length > wordNotRepeatIn) {
                        justAdded.shift();
                        justAdded.push(random5)
                    } else {
                        justAdded.push(random5)
                    }
                }
                
            } 
            
            
            setDataFlatList([{key: 'left-spacer'}, ...modifiedData, {key: 'right-spacer'}])
            
        }
    }, [showContent])

   
    
  return (
    <View style={styles.mainContainer}>

        <View style={styles.header}>
            <View style={styles.headBottom}>
                
                <View style={styles.createButtonContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={changeSides}>
                    {
                        flip ? (
                            <Text style={styles.textButton}>Nor - {btnTxt}</Text>
                        ) : (
                            <Text style={styles.textButton}>{btnTxt} - Nor</Text>
                        )
                    }
                    
                    </TouchableOpacity>
                </View>
                
                <Animated.View style={{...styles.iconXContainer, ...getTransform(25, 25, { rotate: xPositionDeg }, { translateX: 0 }, 0.5, 0.5)}}>
                    <TouchableOpacity style={styles.xContainer} onPress={exitButton}>
                    <Image style={styles.iconXImg} source={require('../../../assets/close.png')} />
                    </TouchableOpacity>
                    
                </Animated.View>
            
            </View>

        </View>

        <View style={styles.body}>

            {showContent ? (
                <FlatList 
                    
                    horizontal
                    style={styles.flatlist}
                    estimatedItemSize={cardSize}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={cardSize}
                    decelerationRate={0}
                    data={dataFlatList}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.key}
                    scrollEventThrottle={16}
                />
            
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}

        </View>

    </View>
  )
}

export default TestWordScreen
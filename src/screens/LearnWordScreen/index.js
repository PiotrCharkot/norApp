import { View, Text, FlatList, Animated, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import { useNavigation } from "@react-navigation/native";
import { withAnchorPoint } from 'react-native-anchor-point';
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from './style'
import CardLearn from '../../components/cards/CardLearn'
import Loader from '../../components/other/Loader';
import dummyData from '../../listData/learningData1';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth * 0.7 + 20;
const spacerSize = (screenWidth - cardSize) / 2;



const LearnWordScreen = ({route}) => {
    
    const {userId, refToList, savedLang, own} = route.params;
    const words = collection(db, own ? 'wordsOwn' : 'words');
    console.log(route.params);
    const scrollX = useRef(new Animated.Value(0)).current;

    const [dataFlatList, setDataFlatList] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [serverData, setServerData] = useState([]);
    const [title, setTitle] = useState('');

    const navigation = useNavigation();

    const interpolatedValueForX = useRef(new Animated.Value(0)).current;

    const xPositionDeg = interpolatedValueForX.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "180deg"]
    })

    const exitButton = () => {

        
        Animated.spring(interpolatedValueForX, {
            toValue: 360,
            speed: 1,
            bounciness: 12,
            useNativeDriver: true,
        }).start();
    
        
    
        setTimeout(() => {
    
            if (own) {
                navigation.navigate({
                    name: 'PublicLists',
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

    
    

    useEffect(() => {

        const getDataFb = async () => {

            const q = query(words, where('refNum', '==', refToList))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setTitle(doc.data().title)
                setServerData(doc.data().wordsArr)
                setShowContent(true);
            });

        }

        getDataFb();


        return () => {
            getDataFb;
        };
    }, [])


    useEffect(() => {
        if (showContent) {
            
            setDataFlatList([{key: 'left-spacer'}, ...serverData, {key: 'right-spacer'}])
            
        }
    }, [showContent])
    


    const renderCard = ({item, index}) => {

        
    
        if (!item.nor) {
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
    
          <CardLearn wordData={item} lang={savedLang}/>
        </Animated.View>
    }


  return (
    
    <View style={styles.mainContainer}>

        <View style={styles.header}>
            <View style={styles.headBottom}>
                
                <View style={styles.createButtonContainer}>
                  
                </View>
                
                <Animated.View style={{...styles.iconXContainer, ...getTransform(25, 25, { rotate: xPositionDeg }, { translateX: 0 }, 0.5, 0.5)}}>
                    <TouchableOpacity style={styles.xContainer} onPress={exitButton}>
                    <Image style={styles.iconXImg} source={require('../../../assets/close.png')} />
                    </TouchableOpacity>
                    
                </Animated.View>
            
            </View>

        </View>
        {showContent ? (
                <View style={styles.body}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{title}</Text>
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
                </View>
            ) : (
                <View style={styles.loaderDisplay}>
                    <Loader />
                </View>
            )}
        
  
    </View>
    
    
  )
}

export default LearnWordScreen
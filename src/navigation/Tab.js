import React, { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Dimensions, Animated, Pressable } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { authentication } from '../../firebase/firebase-config';
import { signInAnonymously, onAuthStateChanged  } from 'firebase/auth';

import LearningScreen from '../screens/LearningScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import ProfilScreen from '../screens/ProfilScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ExerciseScreen from '../screens/ExerciseScreen';


const Tab = createBottomTabNavigator();



const Tabs = () => {


    const focusedIconColor = 'red'
    const focusedIconColor2 = '#b829e3'
    const iconColor = 'grey'
    const iconColor2 = '#b829e3'
    const screenWidth = Dimensions.get("window").width;
    const scale = useRef(new Animated.Value(1)).current;
    const scaleTwo = useRef(new Animated.Value(1)).current;
    const scaleThree = useRef(new Animated.Value(1)).current;
    const scaleFour = useRef(new Animated.Value(1)).current;
    const greyCircleOpacity = useRef(new Animated.Value(0)).current;
    const greyCircleOpacityTwo = useRef(new Animated.Value(0)).current;
    const greyCircleOpacityThree = useRef(new Animated.Value(0)).current;
    const greyCircleOpacityFour = useRef(new Animated.Value(0)).current;
    const shakeFirstIcon = useRef(new Animated.Value(0)).current;
    const shakeSecondIcon = useRef(new Animated.Value(0)).current;
    const shakeThirdIcon = useRef(new Animated.Value(0)).current;
    const shakeFourthIcon = useRef(new Animated.Value(0)).current;
    const shakeFifthIcon = useRef(new Animated.Value(0)).current;
    const redLineOffset = useRef(new Animated.Value(0)).current;
    const [triggerCircelOne, setTriggerCircleOne] = useState(0);
    const [triggerCircelTwo, setTriggerCircleTwo] = useState(0);
    const [triggerCircelThree, setTriggerCircleThree] = useState(0);
    const [triggerCircelFour, setTriggerCircleFour] = useState(0);
    const [triggerCircelFive, setTriggerCircleFive] = useState(0);
    const [numberOfCircleTriggered, setNumberOfCircleTriggered] = useState(0);

    const shakeOffset = 5;

    const navigation = useNavigation();

    const animateCircle = (circleNum) => {
        if (circleNum === 1) {
            setTriggerCircleOne(() => triggerCircelOne + 1);
            setNumberOfCircleTriggered(1);
            navigation.navigate('learning')
        } else if (circleNum === 2) {
            setTriggerCircleTwo(() => triggerCircelTwo + 1);
            setNumberOfCircleTriggered(2);
            navigation.navigate('exercise')
        } else if (circleNum === 3) {
            setTriggerCircleThree(() => triggerCircelThree + 1);
            setNumberOfCircleTriggered(3);
            navigation.navigate('flashcards')
        } else if (circleNum === 4) {
            setTriggerCircleFour(() => triggerCircelFour + 1);
            setNumberOfCircleTriggered(4);
            navigation.navigate('profil')
        } else if (circleNum === 5) {
            setTriggerCircleFive(() => triggerCircelFive + 1);
            setNumberOfCircleTriggered(5);
            navigation.navigate('results')
        }
    };

    useEffect(() => {
        const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
            if (authUser) {
                //console.log('is anonymous?: ', authUser.isAnonymous);
            }
            if (authUser && !authUser.isAnonymous) {
                //console.log('loging as registred user: ', authUser);
            } else if (!authUser) {
                signInAnonymously(authentication)
                .then(() => {
                    //console.log('anonymus sign in was success');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });

                
                
            }
        });
    
        return unscubscribe;
    }, [])

    useEffect(() => {

        if (triggerCircelOne !== 0 && numberOfCircleTriggered === 1) {
            Animated.parallel([
                Animated.spring(redLineOffset, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(greyCircleOpacity, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),
                    Animated.parallel([
                        Animated.timing(greyCircleOpacity, {
                            toValue: 0,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                        Animated.spring(scale, {
                            toValue: 1.3,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.spring(scale, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),

                ]),
                Animated.sequence([
                    Animated.timing(shakeFirstIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFirstIcon, { toValue: -shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFirstIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFirstIcon, { toValue: 0, duration: 100, useNativeDriver: true })
                ])
            ]).start();
        } else if (triggerCircelTwo !== 0 && numberOfCircleTriggered === 2) {
            Animated.parallel([
                Animated.spring(redLineOffset, {
                    toValue: (screenWidth - 42) / 5,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(greyCircleOpacityTwo, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),
                    Animated.parallel([
                        Animated.timing(greyCircleOpacityTwo, {
                            toValue: 0,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                        Animated.spring(scaleTwo, {
                            toValue: 1.3,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.spring(scaleTwo, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),

                ]),
                Animated.sequence([
                    Animated.timing(shakeSecondIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeSecondIcon, { toValue: -shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeSecondIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeSecondIcon, { toValue: 0, duration: 100, useNativeDriver: true })
                ])
            ]).start();
        } else if (triggerCircelThree !== 0 && numberOfCircleTriggered === 3) {
            Animated.parallel([
                Animated.spring(redLineOffset, {
                    toValue: (screenWidth - 42) / 5 * 3,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(greyCircleOpacityThree, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),
                    Animated.parallel([
                        Animated.timing(greyCircleOpacityThree, {
                            toValue: 0,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                        Animated.spring(scaleThree, {
                            toValue: 1.3,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.spring(scaleThree, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),

                ]),
                Animated.sequence([
                    Animated.timing(shakeThirdIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeThirdIcon, { toValue: -shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeThirdIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeThirdIcon, { toValue: 0, duration: 100, useNativeDriver: true })
                ])
            ]).start();

        } else if (triggerCircelFour !== 0 && numberOfCircleTriggered === 4) {
            Animated.parallel([
                Animated.spring(redLineOffset, {
                    toValue: (screenWidth - 42) / 5 * 4,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(greyCircleOpacityFour, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),
                    Animated.parallel([
                        Animated.timing(greyCircleOpacityFour, {
                            toValue: 0,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                        Animated.spring(scaleFour, {
                            toValue: 1.3,
                            duration: 200,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.spring(scaleFour, {
                        toValue: 1,
                        duration: 10,
                        useNativeDriver: true,
                    }),

                ]),
                Animated.sequence([
                    Animated.timing(shakeFourthIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFourthIcon, { toValue: -shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFourthIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFourthIcon, { toValue: 0, duration: 100, useNativeDriver: true })
                ])
            ]).start();
        } else if (triggerCircelFive !== 0 && numberOfCircleTriggered === 5) {
            Animated.parallel([
                Animated.spring(redLineOffset, {
                    toValue: (screenWidth - 42) / 5 * 2,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(shakeFifthIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFifthIcon, { toValue: -shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFifthIcon, { toValue: shakeOffset, duration: 100, useNativeDriver: true }),
                    Animated.timing(shakeFifthIcon, { toValue: 0, duration: 100, useNativeDriver: true })
                ])
            ]).start();
        }
        
        
    }, [triggerCircelOne, triggerCircelTwo, triggerCircelThree, triggerCircelFour, triggerCircelFive]);


    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            
            tabBarStyle: {
                ...styles.tabBar,
                ...styles.shadow
            }
        }}
        >
            <Tab.Screen name="learning" component={LearningScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (

                    <Pressable 
                            style={styles.pressableMenu} 
                            onPress={() => animateCircle(1)}
                            >
                        <MaskedView 
                            style={{ ...styles.maskView }}
                            maskElement={
                                    <View style={{...styles.maskView}}>
                                    
                                        <Animated.Image
                                            source={require('../../assets/learn.png')} 
                                            resizeMode='contain'
                                            style={{
                                                ...styles.iconImg,
                                                transform: [{translateX: shakeFirstIcon}]
                                            }}
                                            />
                
                                        <Text
                                            style={{
                                                ...styles.iconText
                                            }}>LEARN</Text>    
                                    </View>}
                        >
                        

                        <LinearGradient colors={focused ? [focusedIconColor, focusedIconColor2] : [iconColor, iconColor2]} 
                        start={[0.3, 0.0]}
                        end={[0.7, 0.0]} 
                        style={{...styles.pressableMenu}}>

                        </LinearGradient>

                        </MaskedView>
                        <Animated.View style={{
                            ...styles.greyCircle,
                            opacity: greyCircleOpacity,
                            transform: [{ scaleX: scale }, { scaleY: scale }],
                        }}></Animated.View>
                        <Animated.View style={{
                            ...styles.redLineMenu,
                            transform: [{ translateX: redLineOffset }],

                        }}
                        >
                            <LinearGradient colors={[focusedIconColor, focusedIconColor2]} 
                            start={[0.0, 0.0]}
                            end={[1.0, 0.0]} 
                            style={{height: 2,
                                    width: 30,
                                    borderRadius: 1}}
                            >

                            </LinearGradient>
                        </Animated.View>
                    </Pressable>
                )
            }} />
            <Tab.Screen name="exercise" component={ExerciseScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Pressable 
                    style={styles.pressableMenu}
                    onPress={() => animateCircle(2)}
                    >
                        <MaskedView
                        style={{ ...styles.maskView }}
                        maskElement={
                            <View style={{...styles.maskView}}>
                                <Animated.Image
                                source={require('../../assets/exercise.png')} 
                                resizeMode='contain'
                                style={{
                                    ...styles.iconImg,
                                    
                                    transform: [{translateX: shakeSecondIcon}]
                                }}
                                />

                                <Text
                                style={{
                                    ...styles.iconText
                                }}>TRAIN</Text>
                                    </View>
                        }>
                            <LinearGradient colors={focused ? [focusedIconColor, focusedIconColor2] : [iconColor, iconColor2]} 
                            start={[0.3, 0.0]}
                            end={[0.7, 0.0]} 
                            style={{...styles.pressableMenu}}>

                            </LinearGradient>

                        </MaskedView>
                        <Animated.View style={{
                            ...styles.greyCircle,
                            opacity: greyCircleOpacityTwo,
                            transform: [{ scaleX: scaleTwo }, { scaleY: scaleTwo }],
                        }}></Animated.View>
                        
                    </Pressable>
                ),
            }}/>
            <Tab.Screen name="results" component={ResultsScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Pressable style={{
                            ...styles.centerIcon,
                            ...styles.shadow
                        }}
                        onPress={() => animateCircle(5)}>
                        <Animated.Image
                        source={require('../../assets/results.png')} 
                        resizeMode='contain'
                        style={{
                            ...styles.iconImg,
                            tintColor: focused ? 'pink' :  'white',
                            transform: [{translateX: shakeFifthIcon}]
                        }}
                        />

                        <Text
                        style={{
                            color: focused ? 'pink' :  'white',
                            ...styles.iconText
                        }}>RESULTS</Text>
                    </Pressable>
                ),
            }}/>
            <Tab.Screen name="flashcards" component={FlashcardScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Pressable 
                    style={styles.pressableMenu} 
                    onPress={() => animateCircle(3)}
                    >
                        <MaskedView
                         style={{ ...styles.maskView }}
                         maskElement={
                            <View style={{...styles.maskView}}>
                                <Animated.Image
                                source={require('../../assets/flashcard.png')} 
                                resizeMode='contain'
                                style={{
                                    ...styles.iconImg,
                                    tintColor: focused ? focusedIconColor : iconColor,
                                    transform: [{translateX: shakeThirdIcon}]
                                }}
                                />

                                <Text
                                style={{
                                    color: focused ? focusedIconColor : iconColor,
                                    ...styles.iconText
                                }}>CARDS</Text>
                            </View>
                         }>
                            <LinearGradient colors={focused ? [focusedIconColor, focusedIconColor2] : [iconColor, iconColor2]} 
                                start={[0.3, 0.0]}
                                end={[0.7, 0.0]} 
                                style={{...styles.pressableMenu}}>

                            </LinearGradient>
                        </MaskedView>
                        <Animated.View style={{
                            ...styles.greyCircle,
                            opacity: greyCircleOpacityThree,
                            transform: [{ scaleX: scaleThree }, { scaleY: scaleThree }],
                        }}></Animated.View>
                        
                    </Pressable>
                ),
            }}/>
            <Tab.Screen name="profil" component={ProfilScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Pressable 
                    style={styles.pressableMenu} 
                    onPress={() => animateCircle(4)}
                    >
                        <MaskedView
                        style={{ ...styles.maskView }}
                        maskElement={
                            <View style={{...styles.maskView}}>
                                <Animated.Image
                                source={require('../../assets/profil.png')} 
                                resizeMode='contain'
                                style={{
                                    ...styles.iconImg,
                                    tintColor: focused ? focusedIconColor : iconColor,
                                    transform: [{translateX: shakeFourthIcon}]
                                }}
                                />

                                <Text
                                style={{
                                    color: focused ? focusedIconColor : iconColor,
                                    ...styles.iconText
                                }}>PROFIL</Text>
                            </View>
                        }>

                            <LinearGradient colors={focused ? [focusedIconColor, focusedIconColor2] : [iconColor, iconColor2]} 
                                start={[0.3, 0.0]}
                                end={[0.7, 0.0]} 
                                style={{...styles.pressableMenu}}>

                            </LinearGradient>
                        </MaskedView>
                        <Animated.View style={{
                            ...styles.greyCircle,
                            opacity: greyCircleOpacityFour,
                            transform: [{ scaleX: scaleFour }, { scaleY: scaleFour }],
                        }}></Animated.View>
                        
                    </Pressable>
                ),
            }}/>

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        backgroundColor: '#ffffff', 
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        height: 90,
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    },
    pressableMenu: {
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 10, 
        width: 80,
        height: 80,
    },
    maskView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 80,
        height: 80,
    },
    centerIcon: {
        alignItems: 'center', 
        justifyContent: 'center', 
        top: -30, 
        backgroundColor: 'red',
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    greyCircle: {
        height: 40, 
        width: 40,
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'lightgrey', 
        borderRadius: 20,
    },
    iconImg: {
        width: 25,
        height: 25,
        tintColor: 'black'
    },
    iconText: {
        fontSize: 12,
        top: 6,
    },
    redLineMenu: {
        height: 2,
        width: 30,
        borderRadius: 1,
        backgroundColor: 'red', 
        position: 'absolute',
        bottom: 0,
        left: 25,
    }
})

export default Tabs;
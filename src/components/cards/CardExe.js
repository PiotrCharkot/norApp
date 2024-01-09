import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const widthOfBar = screenWidth * 0.405 // 0.6 * 0.75 * 0.9

const CardExe = (params) => {
    
    const { language, title } = params;
    
    const navigation = useNavigation();

    const lineOffset = useRef(new Animated.Value(- widthOfBar)).current;
    const lineOffsetAver = useRef(new Animated.Value(- widthOfBar)).current;

    const [barOffset, setBarOffset] = useState(- widthOfBar)
    const [barOffsetAver, setBarOffsetAver] = useState(- widthOfBar)



    useEffect(() => {

        
        Animated.timing(lineOffset, {
            toValue: barOffset,
            duration: 6000,
            useNativeDriver: true,
        }).start();


        Animated.timing(lineOffsetAver, {
            toValue: barOffsetAver,
            delay: 1000,
            duration: 6000,
            useNativeDriver: true,
        }).start();


        if (params.barsData) {
            setBarOffset((widthOfBar * params.barsData[0] / 100) - widthOfBar)
            setBarOffsetAver((widthOfBar * Math.floor(params.barsData[1] / params.barsData[2] * 100) / 100) - widthOfBar)
        }

        
    }, [barOffset, params.barsData])

    

    
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate(params.link, {savedLang: language})}>
        <LinearGradient colors={[ '#6441A5','#6441A5', '#6441A5',  '#2a0845']} style={styles.outterContainer} >


            <View style={styles.innerContainer}>
                <LinearGradient colors={['#6441A5', '#2a0845', '#2a0845']} style={styles.gradient} >

                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{params.description}</Text>


                
                
        

                </LinearGradient>
            </View>
            
            
        </LinearGradient>


        <View style={styles.bottomContainer}>

            <View style={styles.averageContainer}>

                <View style={styles.averageBars}>
                    <Text style={styles.averageText}>Average</Text>
                    <View style={styles.barHolder}>
                        <Animated.View style={{...styles.reultLine, transform: [{translateX: lineOffsetAver}] }}></Animated.View>
                    </View>
                </View>

                <View style={styles.averageNumCont}>
                    <Text style={styles.averageNumText}>{params.barsData && params.barsData[2] != 0 ? Math.floor(params.barsData[1] / params.barsData[2] * 100) : '0'}%</Text>
                </View>

            </View>

            <View style={styles.averageContainer}>

                <View style={styles.averageBars}>
                    <Text style={styles.averageText}>Best</Text>
                    <View style={styles.barHolder}>
                        <Animated.View style={{...styles.reultLine, transform: [{translateX: lineOffset}] }}></Animated.View>
                    </View>
                </View>

                <View style={styles.averageNumCont}>
                    <Text style={styles.averageNumText}>{params.barsData ? params.barsData[0] : '0'}%</Text>
                </View>

            </View>



            <View style={styles.bestContainer}></View>
        </View>

    </TouchableOpacity>
  )
}

export default CardExe


const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 10,
        height: screenWidth * 0.35,
        width: screenWidth * 0.6,
        borderRadius: 18,
        backgroundColor: '#051E22',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: -5,
            height: -5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.5,
        elevation: 5
    },
    outterContainer: {
        borderRadius: 18
    },
    innerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: screenWidth * 0.35,
        width: screenWidth * 0.6,
        backgroundColor: '#68d2d4',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 18,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 70,
        overflow: 'hidden'
    },
    bottomContainer: {
        position: 'absolute',
        width: '100%',
        //backgroundColor: 'pink',
        bottom: 10
    },
    gradient: {
        height: '100%',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 10,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 18,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 70,
    },
    averageContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    averageBars: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        //backgroundColor: 'salmon',
        width: '75%'
    },
    averageText: {
        color: '#faf739',
        fontSize: 8
    },
    barHolder: {
        backgroundColor: 'grey',
        width: '90%',
        height: 5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    reultLine: {
        width: '100%',
        height: '100%',
        backgroundColor: '#faf739',
        borderRadius: 3
    },
    averageNumCont: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '25%',
        paddingRight: 5
    },
    averageNumText: {
        color: '#faf739',
        fontSize: 10,
        fontWeight: '600'
    },
    offsetSquare: {
        position: 'absolute',
        bottom: -20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: screenWidth * 0.2,
        width: screenWidth * 0.2,
        backgroundColor: '#c9ebf0',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: '50%',
        shadowColor: 'black',
        shadowOffset: {
            width: -5,
            height: -5,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4.5,
        elevation: 5
    },
    textTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
        shadowColor: 'black',
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4.5,
        elevation: 5
    },
    textDescription: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500'
    },
    textLevel: {
        color: '#68d2d4',
        fontSize: 22,
        fontWeight: '900'
    },
    textPro: {
        color: '#68d2d4',
        fontSize: 20,
        fontWeight: '800'
    },
    proView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
    },
})

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect} from 'react';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const RankingItem = (item) => {

    const storage = getStorage();

    const [imgSrc, setImgSrc] = useState("https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg");
    
    useEffect(() => {

        

        getDownloadURL(ref(storage, 'profilePictures/' + item.params.userRef))
        .then((url) => {
            
            setImgSrc(url)
            
        })
        .catch((error) => {
            console.log(error);
            if (error.code === 'storage/object-not-found') {
            console.log('no file for profile');

            
            }
        });
    }, [])
    
    
  return (
    <View style={styles.wrapper}>

        <View style={styles.positionContainer}>
            <Text style={styles.positionText}>{item.params.position}</Text>
        </View>
            <LinearGradient colors={['#6190E8', '#A7BFE8']} style={styles.gradient}>
                <LinearGradient colors={[ '#A7BFE8', '#6190E8']} style={styles.colorLine}></LinearGradient>
                <View  style={{...styles.mainContainer}}>
                
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{item.params.userName}</Text>
                    </View>

                    <View style={styles.resultsContainer}>
                        <View style={styles.daysContainer}>
                            <Text style={styles.daysText}>{item.params.daysInRow}  </Text> 
                            <Image style={styles.pictureSun}  source={require('../../../assets/sun.png')} />
                        </View>
                        <View style={styles.pointsContainer}>
                            <Text style={styles.pointsText}>{item.params.totalPoints}</Text>
                        </View>
                    </View>
                    
                </View>
            </LinearGradient>
            <Image style={styles.picture}  source={{ uri: imgSrc }} />
    </View>
  )
}

export default RankingItem

 

const styles = StyleSheet.create({
    wrapper: {
        //position: 'absolute',
        // borderRadius: 25,
        // overflow: 'visible'
    },
    gradient: {
        borderRadius: 25,
    },
    colorLine: {
        position: 'absolute',
        top: -100,
        backgroundColor: '#A7BFE8',
        height: 100,
        width: 300,
        transform: [{rotate: '150deg'}]
    },
    mainContainer: {
        width: screenWidth - 40,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },
    positionContainer: {
        marginBottom: -20,
        zIndex: 1,
    },
    positionText: {
        fontSize: 40,
        fontWeight: '900',
        color: '#ad42f5',
        textShadowColor: 'white',
        textShadowRadius: 10
    },
    picture: {
        position: 'absolute',
        top: 15,
        height: 60,
        width: 60,
        borderRadius: 30
    },
    pictureSun: {
        height: 20,
        width: 20,
        tintColor: 'brown'
    },
    nameContainer: {
        marginLeft: 60,
        paddingLeft: 10,
        width: screenWidth / 2 - 50,
        height: 18,
    },
    nameText: {
        fontSize: 20,
        fontWeight: '600',
        
    },
    resultsContainer: {
        height: 20,
        width: screenWidth / 2 - 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    daysContainer: {
        flexDirection: 'row',
        width: (screenWidth / 2 - 50) / 2,
        borderLeftWidth: 0.5,
        borderLeftColor: 'grey',
        borderRightWidth: 0.5,
        borderRightColor: 'grey',
        paddingLeft: 10,
        
    },
    daysText: {
        fontSize: 20,
        fontWeight: '400',
    },
    pointsContainer: {
        paddingRight: 20
    },
    pointsText: {
        fontSize: 20,
        fontWeight: '400',
    }
})
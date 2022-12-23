import { View, Text, TouchableOpacity, Image, Dimensions, Animated} from 'react-native'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigation, useFocusEffect, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'
import { onAuthStateChanged  } from 'firebase/auth';
import { authentication } from '../../../firebase/firebase-config';
import { signOut } from "firebase/auth";



const screenWidth = Dimensions.get('window').width;


const ProfilScreen = () => {



  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [userLoged, setUserLoged] = useState(false);
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const overlayOffset = useRef(new Animated.Value(0)).current;
  


  const signOutFunc = () => {

    signOut(authentication)
      .then(() => {
        console.log('user  loged out');
        setUserLoged(false);
      })
      .catch(() => {
        console.log("Could not log out!");
      });
  }


  useEffect(() => {

    const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
      
      if (authUser && !authUser.isAnonymous) {
          setUserLoged(true);
      }
  });
  
  return unscubscribe;
  }, [userLoged])

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
      

      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.backgroundTop}>
        <View style={styles.loginButtonContainer}>
          {userLoged ? <TouchableOpacity onPress={() => signOutFunc()}>
            <Text style={styles.textLoginButton}>LOG OUT</Text>
          </TouchableOpacity> : <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLoginButton}>LOG IN</Text>
          </TouchableOpacity>}  
        </View>

        
      </LinearGradient>
      
      
      <View style={styles.bottomContainer}> 

        
        <View style={{...styles.imgContainer, ...styles.shadowImg}}>
          <Image style={styles.img} source={require('../../../assets/reindeer-pic.png')}/>
        </View>
      </View>
      
     
        
      
      
      <Animated.View style={{...styles.whiteOverlay, opacity: overlayOpacity, transform: [{translateX: overlayOffset}]}}></Animated.View>
    
        
    </View>
  )
}

export default ProfilScreen;


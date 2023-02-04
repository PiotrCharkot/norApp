import { View, Text, TouchableOpacity, Image, Dimensions, Animated, ScrollView} from 'react-native'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { authentication } from '../../../firebase/firebase-config';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { signOut } from "firebase/auth";


const screenWidth = Dimensions.get('window').width;


const ProfilScreen = () => {


  const auth = getAuth();
  const user = auth.currentUser;

  const storage = getStorage();
 
  const randomPicture = ['reindeer-profile.png', 'reindeer-profile2.png', 'reindeer-profile3.png','reindeer-profile4.png', 'reindeer-profile5.png', 'reindeer-profile6.png', 'reindeer-profile7.png', 'reindeer-profile8.png']
  

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [userLoged, setUserLoged] = useState(false);
  const [username, setUsername] = useState('Guest');
  const [userEmail, setUserEmail] = useState('No email');
  const [userId, setUserId] = useState('');
  const [userAnonymous, setUserAnonymous] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState('reindeer-profile3.png');
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const overlayOffset = useRef(new Animated.Value(0)).current;
  
  let randomIndex;

  const signOutFunc = () => {
    signOut(authentication)
      .then(() => {
        setUserLoged(false);
      })
      .catch(() => {
        console.log("Could not log out!");
      });
  }

  const uploadToFb = async (urlParam) => {
        

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = (e) => {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", urlParam, true);
      xhr.send(null);
    });

    uploadBytesResumable(ref(storage, `profilePictures/${user.uid}`), blob).then((snapshot) => {
        //console.log('Uploaded a blob or file!');
    });
    
   
}


  const downloadFromFb = () => {
    
    //console.log( 'id to download picture', user.uid);


    if (user) {
      getDownloadURL(ref(storage, 'profilePictures/' + user.uid))
      .then((url) => {
          
        setProfilePicUrl(url)
          
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'storage/object-not-found') {
          //console.log('no file for profile');

          getDownloadURL(ref(storage, 'profilePictures/' + newProfilePic))
            .then((url) => {
            
              setProfilePicUrl(url)
              uploadToFb(url);
            })
            .catch((error) => {
              //console.log('Didnt get profile picture here');
            })
          
        }
      });
    }
    

    // if (userId !== '') {
    //   getDownloadURL(ref(storage, 'profilePictures/' + userId))
    //   .then((url) => {
          
    //     setProfilePicUrl(url)
          
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.code === 'storage/object-not-found') {
    //       //console.log('no file for profile');

    //       getDownloadURL(ref(storage, 'profilePictures/' + newProfilePic))
    //         .then((url) => {
            
    //           setProfilePicUrl(url)
    //           uploadToFb(url);
    //         })
    //         .catch((error) => {
    //           //console.log('Didnt get profile picture here');
    //         })
          
    //     }
    //   });
    // }
    
  }


  useEffect(() => {
  
    randomIndex = Math.floor(Math.random() * randomPicture.length);
    setNewProfilePic(randomPicture[randomIndex]);
    
  }, [])
  
  

  useEffect(() => {


    
    if (user) {
      console.log('user: ', user.uid);
      //setUserId(user.uid); 
    }

    if (user && !user.isAnonymous) {
      setUserLoged(true);
      setUsername(user.displayName);
      setUserEmail(user.email);
    } else {
      
      setUserLoged(false);
      setUsername('Guest');
      setUserEmail('No email');
    }

    downloadFromFb();

  //   const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
      
  //     //console.log('user id to set in profil screen', authUser.uid);
      

  //     setUserId(authUser.uid)
      
      
  //     if (authUser && !authUser.isAnonymous) {
  //       setUserLoged(true);
  //       setUsername(authUser.displayName);
  //       setUserEmail(authUser.email);
  //     } else {
        
  //       setUserLoged(false);
  //       setUsername('Guest');
  //       setUserEmail('No email');
  //     }
  //     downloadFromFb();
  //   });
  
  // return unscubscribe;
  }, [userLoged, isFocused])

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
          {userLoged ? null : <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLoginButton}>LOG IN</Text>
          </TouchableOpacity>}  
        </View>

        <TouchableOpacity style={styles.settingsImgContainer} onPress={() => navigation.navigate('Settings')}>
          <Image style={styles.settingsImg} source={require('../../../assets/settings.png')} />
        </TouchableOpacity>

        
      </LinearGradient>
      
      
      <View style={styles.bottomContainer}> 

        
        <View style={{...styles.imgContainer, ...styles.shadowImg}}>
          <Image style={styles.img} source={{ uri: profilePicUrl }}/>
        </View>

        <View style={{height: 400}}>

        <ScrollView style={styles.infoContainer} contentContainerStyle={styles.scrollStyle}>
          <View style={styles.topInfo}>
            <View style={styles.leftTopInfo}>
              <Text style={styles.pointsText}>340</Text>
              <Text>Points</Text>
            </View>
            <View style={styles.rightTopInfo}>
              <Text style={styles.pointsText}>5</Text>
              <Text>Days</Text>
            </View>

          </View>
          <View style={styles.valContainer}>
            <View style={styles.fieldDesc}>
              <Text style={styles.fieldDescText}>Username</Text>
            </View>
            <View style={styles.fieldVal}>
              <Text style={styles.fieldValText}>{username}</Text>  
            </View>
          </View>

          <View style={styles.valContainer}>
            <View style={styles.fieldDesc}>
              <Text style={styles.fieldDescText}>Email</Text>
            </View>
            <View style={styles.fieldVal}>
              <Text style={styles.fieldValText}>{userEmail}</Text>  
            </View>
          </View>


          <TouchableOpacity style={styles.btnChangePicOpacity} onPress={() => navigation.navigate('ChangePic', {userId: user.uid})}>
            <Text>Change Picture</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
      </View>
      
     
        
      
      
      <Animated.View style={{...styles.whiteOverlay, opacity: overlayOpacity, transform: [{translateX: overlayOffset}]}}></Animated.View>
    
        
    </View>
  )
}

export default ProfilScreen;


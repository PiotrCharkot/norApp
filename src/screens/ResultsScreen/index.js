import { View, Text, FlatList, Image } from 'react-native'
import React, {useState, useEffect, useRef, useCallback}  from 'react'
import { onAuthStateChanged  } from 'firebase/auth';
import { useIsFocused } from "@react-navigation/native";
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where, doc, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { authentication } from '../../../firebase/firebase-config';
import RankingItem from '../../components/other/RankingItem';
import styles from './style';


const usersPointsCollection = collection(db, 'usersPoints');

let extraItem = {
  dailyPoints: 0,
  daysInRow: 0,
  lastUpdate: '',
  totalPoints: 0,
  userName: 'extra',
  userRef: 'extra.png',
  weeklyPoints: 70
}

const ResultsScreen = () => {

  const storage = getStorage();

  const [dataFlatList, setDataFlatList] = useState([]);
  const [userId, setUserId] = useState('userId');
  const [imgSrc, setImgSrc] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHD_transparent_picture.png&psig=AOvVaw06tXtft-O_kCjAPf3xT_cS&ust=1677700689506000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD1rp-Auf0CFQAAAAAdAAAAABAE");
  const [imgSrc2, setImgSrc2] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHD_transparent_picture.png&psig=AOvVaw06tXtft-O_kCjAPf3xT_cS&ust=1677700689506000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD1rp-Auf0CFQAAAAAdAAAAABAE");
  const [imgSrc3, setImgSrc3] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHD_transparent_picture.png&psig=AOvVaw06tXtft-O_kCjAPf3xT_cS&ust=1677700689506000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD1rp-Auf0CFQAAAAAdAAAAABAE");
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [thirdName, setThirdName] = useState('');
  const [pointsFirst, setPointsFirst] = useState('');
  const [pointsSecond, setPointsSecond] = useState('');
  const [pointsThird, setPointsThird] = useState('');
  const [daysFirst, setDaysFirst] = useState('');
  const [daysSecond, setDaysSecond] = useState('');
  const [daysThird, setDaysThird] = useState('');



  const isFocused = useIsFocused();

  useEffect(() => {
    getDataFb(); 
  }, [isFocused]);

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(authentication, (authUser) => {
        
      if (authUser) {
        setUserId(authUser.uid)

      }
    });

    return unscubscribe;
  }, [])
  

  const getDataFb = async () => {

    let tempDataArray = []
    
    const allDocsInPointsCol = query(usersPointsCollection);
    const querySnapshotAllDocs = await getDocs(allDocsInPointsCol);
    
    querySnapshotAllDocs.forEach((doc) => {
      tempDataArray.push(doc.data())
    })

    if (tempDataArray.length > 0) {
      tempDataArray.sort((a,b) => b.totalPoints - a.totalPoints);

      for (let i = 0; i < tempDataArray.length; i++) {
        tempDataArray[i].position = i + 1;

        
      }
    }
     
    tempDataArray.push(extraItem)
    
    setDataFlatList(tempDataArray.slice(3));
    
    if (tempDataArray.length > 0) {
      for (let i = 0; i < 3; i++) {
        getDownloadURL(ref(storage, 'profilePictures/' + tempDataArray[i].userRef))
        .then((url) => {
          
          if (i === 0) {
            setImgSrc(url)
            setFirstName(tempDataArray[i].userName)
            setDaysFirst(tempDataArray[i].daysInRow)
            setPointsFirst(tempDataArray[i].totalPoints)
          } else if (i === 1) {
            setImgSrc2(url)
            setSecondName(tempDataArray[i].userName)
            setDaysSecond(tempDataArray[i].daysInRow)
            setPointsSecond(tempDataArray[i].totalPoints)
          } else if (i === 2) {
            setImgSrc3(url)
            setThirdName(tempDataArray[i].userName)
            setDaysThird(tempDataArray[i].daysInRow)
            setPointsThird(tempDataArray[i].totalPoints)
          }
            
        })
        .catch((error) => {
          console.log(error);
          if (error.code === 'storage/object-not-found') {
          console.log('no file for profile');

          
          }
        });
      }
    }
    
    
    
  }



  return (
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}>
        <View style={styles.positionSecond}>
          <Image style={styles.pictureSecond}  source={{ uri: imgSrc2 }} />
          <Text style={styles.positionText}>2</Text>
          <Text style={styles.userNameTop} numberOfLines={1}>{secondName}</Text>
          <Text style={styles.pointsTop}>{daysSecond} / {pointsSecond}</Text>
        </View>
        <View style={styles.positionThird}>
          <Image style={styles.pictureThird}  source={{ uri: imgSrc3 }} />
          <Text style={styles.positionText}>3</Text>
          <Text style={styles.userNameTop} numberOfLines={1}>{thirdName}</Text>
          <Text style={styles.pointsTop}>{daysThird} / {pointsThird}</Text>
        </View>
        <View style={styles.positionFirst}>
          <Image style={styles.pictureFirst}  source={{ uri: imgSrc }} />
          <Text style={styles.positionText}>1</Text>
          <Text style={styles.userNameTop} numberOfLines={1} >{firstName}</Text>
          <Text style={styles.pointsTop}>{daysFirst} / {pointsFirst}</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
        
        <FlatList
          style={styles.flatList}
          data={dataFlatList}
          keyExtractor={(item) => item.userRef}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <RankingItem params={item} userRef={userId}/>}
        />
       
      </View>
      
    </View>
  )
}

export default ResultsScreen
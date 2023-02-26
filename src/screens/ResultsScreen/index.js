import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect, useRef, useCallback}  from 'react'
import { onAuthStateChanged  } from 'firebase/auth';
import { useIsFocused } from "@react-navigation/native";
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, where, doc, setDoc, updateDoc } from "firebase/firestore";
import { authentication } from '../../../firebase/firebase-config';
import RankingItem from '../../components/other/RankingItem';
import styles from './style';


const usersPointsCollection = collection(db, 'usersPoints');

const ResultsScreen = () => {


  const [dataFlatList, setDataFlatList] = useState([]);
  const [userId, setUserId] = useState('userId');

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

   
    setDataFlatList(tempDataArray);
    
  }



  return (
    <View style={styles.mainContainer}>

      <View style={styles.middleContainer}>
        
        <FlatList 
          data={dataFlatList}
          keyExtractor={(item) => item.userRef}
          renderItem={({ item }) => <RankingItem params={item} userRef={userId}/>}
        />
      </View>
      
    </View>
  )
}

export default ResultsScreen
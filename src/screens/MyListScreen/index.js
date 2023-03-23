import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { collection, getDocs, query, where, doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase-config'
import { authentication } from '../../../firebase/firebase-config';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from './style'
import CardOwn from '../../components/cards/CardOwn';




const wordsOwn = collection(db, 'wordsOwn');

const MyListScreen = ({ route }) => {


    const {userRef} = route.params
    const auth = getAuth();
    const user = auth.currentUser;
    const navigation = useNavigation();

    const [isContent, setIsContent] = useState(true);
    const [dataFlatlist, setDataFlatlist] = useState([]);
    const [userId, setUserId] = useState('');

    const isFocused = useIsFocused();

    const renderItemFunc = ({item}) => {
  
      return <CardOwn lang={item.listLang} title={item.listTitle} userId={item.useRef} listReference={item.refNum} />
    }
    

    useEffect(() => {

      
      setUserId(userRef);


      const getDataFb = async () => {

          const q = query(wordsOwn, where('useRef', '==', userRef))
          const querySnapshot = await getDocs(q);
          let tempArr = [];
  
          if (querySnapshot.empty) {
            console.log('there is no lists for this user')
          } else {
            console.log('user exist in data base');
          }
          
          querySnapshot.forEach((doc) => {
            tempArr.push(doc.data());
          });
  
          setDataFlatlist(tempArr)
      }
  
      getDataFb();
    
      
    }, [isFocused])
    





  return (
    <View style={styles.mainContainer}>
    
      {isContent ? <View style={styles.cardsContainer}>

           

        <FlatList 
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        decelerationRate={0}
        data={dataFlatlist}
        keyExtractor={(item) => item.refNum}
        renderItem={renderItemFunc}
        
        scrollEventThrottle={16}
        />

        </View> : <View style={styles.emptyContent}>
        
            <Text style={styles.emptyContentText}>You don't have any lists. Tap button at bottm to create new list</Text>

        </View>}
      

      

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.opacityBtn} onPress={() => navigation.navigate({
            name: 'CreateList',
            params: {userReference: userId}
        })}>
            <Text style={styles.buttonText}>Create new list + </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyListScreen
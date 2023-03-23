import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useState, useRef, useEffect, createRef}  from 'react'
import { Input } from "react-native-elements"; 
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where, doc, setDoc, updateDoc } from "firebase/firestore";
import styles from './style'
import uuid from 'react-native-uuid';
import { db } from '../../../firebase/firebase-config'


//const wordsOwn = collection(db, 'wordsOwn');

const CreateListScreen = ({ route }) => {

    const {userReference} = route.params;
    const navigation = useNavigation();
    let wordIdentification = 0;

    const [title, setTitle] = useState('');
    const [language, setLanguage] = useState('');
    const [norWord, setNorWord] = useState('');
    const [transWord, setTransWord] = useState('');
    const [documentId, setDocumentId] = useState('tempid');
    const [allUsersArrs, setAllUsersArrs] = useState([]);
    const [isSelectedPublic, setSelectionPublic] = useState(false);


    const userWordsData = collection(db, 'usersWordsInfo');
    const docRef = doc(db, "usersWordsInfo", documentId);

    const norInput = createRef();
    const transInput = createRef();

    const [dataFlatList, setDataFlatList] = useState([]);

    const deletePosition = (pairKey) => {
        let tempObj = [];
        
        dataFlatList.map(item => {
            if (item.key !== pairKey) {
                tempObj.push(item)
            }
        } );

        setDataFlatList(tempObj);
        
    }


    const renderWords = ({item, index}) => {

    
        return <View style={styles.wordsContainer}>
    
          <Text style={styles.wordsText}>{item.nor} - {item.eng} </Text>
          <TouchableOpacity onPress={() => {deletePosition(item.key)}}>
            <Image style={styles.image} source={require('../../../assets/close.png')} />
          </TouchableOpacity>
        </View>
    }

    const addWordToList = () => {

        if (norWord !== '' && transWord !== '') {
            let wordKey = uuid.v4();
            let tempObj = JSON.parse(JSON.stringify(dataFlatList))
            tempObj.push({
                nor: norWord,
                eng: transWord,
                key: wordKey,
                wordId: tempObj.length === 0 ? 0 : tempObj[tempObj.length - 1].wordId + 1,
                soundLink: ''
            })

            
            norInput.current.clear();
            transInput.current.clear();
            setNorWord('');
            setTransWord('');
            
            setDataFlatList(tempObj);
        }
        
        
    }

    const createList = async () => {
        console.log('add list to firebase');

        if (title !== '' && language !== '') {
            let docId = uuid.v4();
            let listRef = uuid.v4();
            await setDoc(doc(db, 'wordsOwn', docId),{
                listLang: language,
                refNum: listRef,
                listTitle: title,
                public: false,
                useRef: userReference,
                wordsArr: dataFlatList
            })

            console.log('heeeeeeeeeeee', allUsersArrs);
            let tempArr = Array.from(Array(dataFlatList.length).keys())
            console.log('temporrary arr ', tempArr);
            let addToUserInfo = {
                refToList: listRef,
                words1: tempArr,
                words2: [],
                words3: [],
                words4: [],
                words5: [],
            }

            console.log('object ', addToUserInfo);
            let tempInfo = JSON.parse(JSON.stringify(allUsersArrs))
            tempInfo.push(addToUserInfo)

            console.log('final ', tempInfo);

            updateDoc(docRef, {
                wordList: tempInfo
            })
            .then(docRef => {
                console.log("A New Document Field has been added to an existing document");
            })
            .catch(error => {
                console.log(error);
            })


            navigation.navigate({
                name: 'MyList',
                params: {userRef: userReference}
              })
        } else {
            //display message
            console.log('display message to fill rest of form ');
        }
    }


    useEffect(() => {

        const getDataFb = async () => {

            const q2 = query(userWordsData, where('userReference', '==', userReference))
            const querySnapshot2 = await getDocs(q2);
            querySnapshot2.forEach((doc) => {
            
                setDocumentId(doc.id);
                setAllUsersArrs(doc.data().wordList);
            
            })
        }
      

        getDataFb()
    }, [])
    

  return (
    <View style={styles.mainContainer}> 

      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <Input 
        placeholder='Title e.g. Nouns - A1'
        onChangeText={(text) => setTitle(text)}
        />
        <Text>Language</Text>
        <Input 
        placeholder='Your language e.g. english'
        onChangeText={(text) => setLanguage(text)}
        />

        <View style={styles.addingContainer}>
        
            <View style={styles.inputHolder}>

                <Input 
                ref={norInput}
                placeholder='norwegian word'
                inputContainerStyle={styles.inputSmallContainerStyle}
                onChangeText={(text) => setNorWord(text)}
    
                />
            </View>
            
            <View style={styles.inputHolder}>

                <Input 
                ref={transInput}
                placeholder='translation'
                inputContainerStyle={styles.inputSmallContainerStyle}
                onChangeText={(text) => setTransWord(text)}
                />
            </View>

            
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity  style={styles.opacityBtn} onPress={() => addWordToList()}>
                <Text style={styles.opacityBtnText}>Add</Text>
            </TouchableOpacity>

            {dataFlatList.length > 2 ? <TouchableOpacity  style={styles.opacityBtn} onPress={() => createList()}>
                <Text style={styles.opacityBtnText}>CreateList</Text>
            </TouchableOpacity> : <View style={styles.infoContainer}>
                <Text style={styles.textInfo}>Add at least 3 words to create a list</Text>

            </View> }
        </View>

        <View style={styles.addedWords}>
            <FlatList 
            style={styles.flatList}
            data={dataFlatList}
            renderItem={renderWords}
            keyExtractor={(item) => item.key}
            />
        </View>


        <View>
            
        </View>

        
      </View>
    </View>
  )
}

export default CreateListScreen
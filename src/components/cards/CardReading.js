import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { collection, getDocs, query, where, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase-config'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import uuid from 'react-native-uuid';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CardReading = (params) => {

    const navigation = useNavigation();

    const wordsOwn = collection(db, 'wordsOwn');

    const [documentId, setDocumentId] = useState(params.docForUpdate);
    const [addBtnTxt, setAddBtnTxt] = useState('Add to your list');
    const [alreadyAdded, setAlreadyAdded] = useState(false);


    



  return (
    <View style={styles.mainContainer}>
        <View style={styles.orangeSquare} >
            <LinearGradient colors={['#FFA500', '#6d28ed']} start={[1, 0.35]} end={[1, 0.65]}></LinearGradient>
            <View style={styles.blackSquare}>

            </View>
        </View>
        
    </View>
  )
}

export default CardReading


const styles = StyleSheet.create({
    mainContainer: {
        height: screenHeight * 0.16,
        width: screenWidth * 0.6,
        backgroundColor: 'white',
        borderRadius: 30,
        marginHorizontal: 10,
        //marginBottom: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.45,
        shadowRadius: 14.5,
        elevation: 5,
        overflow: 'hidden'
    },
    orangeSquare: {
        position: 'absolute',
        width: screenWidth * 0.3,
        height: screenWidth * 0.3,
        borderRadius: 24,
        transform: [{rotate: '45deg'}, {translateX: 0}, {translateY: -20}],
        backgroundColor: '#FFA500',
        alignItems: 'flex-end'
    },
    blackSquare: {
        backgroundColor: 'black',
        height: screenWidth * 0.4,
        width: screenWidth * 0.4,
        borderRadius: 24,
        marginTop: 15,
        marginRight: 15
    }
    
   
});
import { View, Text, StyleSheet} from 'react-native'
import React, {useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const moveToMain = () => {
        navigation.replace("Main");
    }

    useEffect(() => {
      
        setTimeout(() => {
            moveToMain();
            
        }, 100);

    }, [])
    

  return (
    <View style={style.mainContainer}>
      <Text>WelcomeScreen</Text>
    </View>
  )
}

const style = StyleSheet.create({
    mainContainer: {
        marginTop: 100, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WelcomeScreen
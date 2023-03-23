import { StyleSheet, Dimensions } from "react-native";



const styles = StyleSheet.create({
    mainContainer: {
        height: '100%'
    },
    inputContainer: {
        marginTop: 60,
        marginHorizontal: 20
    },
    addingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    inputSmallContainerStyle: {
        width: 125
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%'
    },
    opacityBtn: {
        height: 50, 
        width: 150,
        backgroundColor: 'pink',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    opacityBtnText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    },
    infoContainer: {
        height: 65
    },
    textInfo: {
        color: 'grey'
    },
    addedWords: {

    },
    wordsContainer: {
        height: 20,
        flexDirection: 'row'
    },
    flatList: {
    
    },
    wordsText: {
        fontSize: 20
    },
    image: {
        height: 16,
        width: 16
    }

});


export default styles;


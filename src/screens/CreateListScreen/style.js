import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: 'white'
    },
    iconX: {
        height: 25,
        width: 25,
        tintColor: 'grey'
    },
    iconXContainer: {
        height: 25,
        width: 25,
        position: 'absolute',
        left: screenWidth - 50,
        top: 50
    },
    inputContainer: {
        marginTop: 80,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: 'white'
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
        flex: 1,
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
    },
    checkboxContainer: {
        marginBottom: 50
    }

});


export default styles;


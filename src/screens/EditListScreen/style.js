import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width

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
        marginTop: 20
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
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteOpacity: {
        height: 30,
        width: 140,
        backgroundColor: 'pink',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    deleteOpacityText: {
        color: 'white',
        fontWeight: '500'
    },
    confirmationContainer: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0
    },
    confirmationContainerInside: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        borderRadius: 14
    },
    confirmationText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
        marginTop: 15
    },
    confirmationBtnCont: {
        flexDirection: 'row',
        marginVertical: 20,
        
    },
    confirmationBtn: {
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    confirmationBtnTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }

});


export default styles;


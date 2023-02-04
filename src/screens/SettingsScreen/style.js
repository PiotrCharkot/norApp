import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
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
    mainImg: {
        width: screenWidth / 2,
        height: screenWidth / 2,
        position: 'absolute',
        top: 50,
        tintColor: 'lightgrey',
    },
    buttonImg: {
        width: 25,
        height: 25,
        tintColor: 'red',
        marginHorizontal: 10
    },
    buttonText: {
        color: 'grey',
        fontSize: 18
    },
    infoContainer: {
        width: screenWidth - 80,
        paddingTop: 20,
        borderWidth: 1, 
        borderColor: 'lightgrey',
        borderRadius: 40,
        marginTop: screenWidth / 4 + 50,
        marginBottom: 100,
        backgroundColor: 'white'
    },
    scrollStyle: {
        alignItems: 'center',
    },
    btnOpacity: {
        flexDirection: 'row',
        marginTop: 30,
        height: 50,
        width: screenWidth - 120,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 15,
    }
});


export default styles;
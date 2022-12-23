import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const picSize = 150
console.log('screen width: ', screenWidth);
const styles = StyleSheet.create({

    mainContainer: {
        height: '100%',
        width: screenWidth,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    whiteOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    loginButtonContainer: {
        marginTop: 0
    },
    backgroundTop: {
        
        left: -screenWidth / 2,
        top: -screenWidth / 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: screenWidth,
        width: screenWidth * 2 ,
        borderBottomLeftRadius : screenWidth ,
        borderBottomRightRadius : screenWidth ,
        overflow : 'hidden',
        
    },
    bottomContainer: {
        height: screenHeight - screenWidth,
        width: '100%',
        top: -screenWidth / 3,
        overflow: 'visible',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    imgContainer: {
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'salmon', 
        height: picSize, 
        width: picSize, 
        top: - picSize / 2,
        left: screenWidth / 2 - picSize / 2,
        borderRadius: picSize / 2,
        borderWidth: 4,
        borderColor: 'white',
        overflow: "visible"
    },
    img: {
        height : picSize - 8,
        width : picSize - 8,
        borderRadius: (picSize - 8) / 2,
        overflow: "hidden"
    },
    shadowImg: {
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.25,
        shadowRadius: 6.5,
        elevation: 5

    },
    textLoginButton: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20
    }
});

export default styles;
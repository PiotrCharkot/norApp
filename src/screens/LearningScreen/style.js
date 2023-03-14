import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height: '100%'
    },
    whiteOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    gradinetImg: {
        position: 'absolute',
        height: 200,
        width: '100%'
    },
    mainImg: {
        position: 'absolute',
        height: 200,
        width: '100%',
        
    },
    gradientContainer: {
        position: 'absolute',
        height: 200,
        width: '100%',
    },
    head: {
        height: 80,
        width: "100%",
        backgroundColor: 'rgba(255,255,255,0)'
    },
    flatListsContainer: {
        marginTop: 235,
    },
    flatListsContainerBottom: {
        marginTop: 50,
    },
    flatListsContainerLast: {
        marginTop: 50,
        marginBottom: 200
    },
    titleContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 20,
        //width: 220,
        top: -10,
        //left: screenWidth / 2 - 110
    },
    titleText: {
        fontWeight: '900',
        fontSize: 20,
        color: 'brown'
    },
    flatlist: {
        height: screenWidth * 0.35 + 110,
        paddingTop: 85,
    },
    gradinetFlatlist: {
        top: 0.5,
        position: 'absolute',
        height: screenWidth * 0.35 + 110,
        width: '100%',
    },
});


export default styles;


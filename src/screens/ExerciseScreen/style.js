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
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'flex-end'
    },
    headBottom: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    readingButtonContainer: {
        flexDirection: 'row',
        margin: 10,
        height: 28
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'rgba(184, 41, 227, 0.5)',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(184, 41, 227, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bookPic: {
        height: 16,
        width: 16, 
        marginLeft: 10,
        tintColor: 'brown'
    },
    textButton: {
        fontWeight: '600',
        color: 'brown'
    },
    flatListsContainer: {
        marginTop: 235,
    },
    titleContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 20,
        width: 120,
        top: -10,
        left: screenWidth / 2 - 60
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
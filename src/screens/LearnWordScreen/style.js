import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 80,
        width: "100%",
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'flex-end'
    },
    headBottom: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    createButtonContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'rgba(184, 41, 227, 0.5)',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(184, 41, 227, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontWeight: '600',
        color: 'brown'
    },
    iconXContainer: {
        flexDirection: 'row',
        margin: 10,
        overflow: 'visible'
    },
    xContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    iconXImg:{
        height: 20,
        width: 20,
        tintColor: 'black',
    },
    titleContainer: {
        marginTop: 20
    },
    titleText: {
        fontSize: 30,
        fontWeight: '600',
        color: 'grey'
    },
    flatlist: {
        paddingTop: 100,
    },
    
});


export default styles;
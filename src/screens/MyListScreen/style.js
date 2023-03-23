import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
   mainContainer: {
    height: '100%',
    width: '100%'
   },
   cardsContainer: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
   },
   emptyContent: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
   },
   emptyContentText: {
    fontSize: 20,
    textAlign: 'center'
   },
   buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
   },
   opacityBtn: {
    height: 50,
    width: 240,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
   },
   buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500'
   },
   
});


export default styles;
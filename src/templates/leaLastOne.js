// add on top outside the component 
// number 3 in const totalPoints is number of question Screens in this class

const totalPoints = 3 * generalStyles.answerBonus + currentScreen * generalStyles.screenBonus;
const dataForMarkers = {
  part: 'learning',
  section: 'section1',
  class: 0
}


// add to params send to bottomBar component


//linkNext={'ExitExcScreen'}

//learningLastScreen={true}
totalPoints={totalPoints}
dataForMarkers={dataForMarkers}



// last screens can be combined with 'checkAnswerOrderCheck' and 'checkAnswer' as only one that might use 'learningLastScreen' parameter send to bottomBar






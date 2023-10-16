import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import Tabs from "./Tab";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgetPassScreen from "../screens/ForgetPassScreen";
import LearnWordScreen from "../screens/LearnWordScreen";
import TestWordScreen from "../screens/TestWordScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ReadingScreen from "../screens/ReadingScreen";
import TextScreen from "../screens/TextScreen";
import ChangePictureScreen from "../screens/ChangePicture";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import ReAuthScreen from "../screens/ReAuthScreen";
import CreateListScreen from "../screens/CreateListScreen";
import MyListScreen from "../screens/MyListScreen";
import ExitExcScreen from "../screens/ExitExcScreen";
import EditListScreen from "../screens/EditListScreen";
import PublicListScreen from "../screens/PublicListsScreen";
import Class1x1x1 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x1";
import Class1x1x2 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x2";
import Class1x1x3 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x3";
import Class1x1x4 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x4";
import Class1x1x5 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x5";
import Class1x1x6 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x6";
import Class1x1x7 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x7";
import Class1x1x8 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x8";
import Class1x1x9 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x9";
import Class1x1x10 from "../screens/ClassScreens/LearningScreens/Class1x1/Class1x1x10";
import Class1x2x1 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x1";
import Class1x2x2 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x2";
import Class1x2x3 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x3";
import Class1x2x4 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x4";
import Class1x2x5 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x5";
import Class1x2x6 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x6";
import Class1x2x7 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x7";
import Class1x2x8 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x8";
import Class1x2x9 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x9";
import Class1x3x1 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x1";
import Class1x3x2 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x2";
import Class1x3x3 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x3";
import Class1x3x4 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x4";
import Class1x3x5 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x5";
import Class1x3x6 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x6";
import Class1x3x7 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x7";
import Class1x3x8 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x8";
import Class1x3x9 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x9";
import Class1x3x10 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x10";
import Class1x3x11 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x11";
import Class1x3x12 from "../screens/ClassScreens/LearningScreens/Class1x3/Class1x3x12";
import Class1x4x1 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x1";
import Class1x4x2 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x2";
import Class1x4x3 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x3";
import Class1x4x4 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x4";
import Class1x4x5 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x5";
import Class1x4x6 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x6";
import Class1x4x7 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x7";
import Class1x4x8 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x8";
import Class1x4x9 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x9";
import Class1x4x10 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x10";
import Class1x4x11 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x11";
import Class1x4x12 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x12";
import Class1x4x13 from "../screens/ClassScreens/LearningScreens/Class1x4/Class1x4x13";
import Class1x5x1 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x1";
import Class1x5x2 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x2";
import Class1x5x3 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x3";
import Class1x5x4 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x4";
import Class1x5x5 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x5";
import Class1x5x6 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x6";
import Class1x5x7 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x7";
import Class1x5x8 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x8";
import Class1x5x9 from "../screens/ClassScreens/LearningScreens/Class1x5/Class1x5x9";
import Class2x1x1 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x1";
import Class2x1x2 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x2";
import Class2x1x3 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x3";
import Class2x1x4 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x4";
import Class2x1x5 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x5";
import Class2x1x6 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x6";
import Class2x1x7 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x7";
import Class2x1x8 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x8";
import Class2x1x9 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x9";
import Class2x1x10 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x10";
import Class2x1x11 from "../screens/ClassScreens/LearningScreens/Class2x1/Class2x1x11";
import Class2x2x1 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x1";
import Class2x2x2 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x2";
import Class2x2x3 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x3";
import Class2x2x4 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x4";
import Class2x2x5 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x5";
import Class2x2x6 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x6";
import Class2x2x7 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x7";
import Class2x2x8 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x8";
import Class2x2x9 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x9";
import Class2x2x10 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x10";
import Class2x2x11 from "../screens/ClassScreens/LearningScreens/Class2x2/Class2x2x11";
import Class2x3x1 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x1";
import Class2x3x2 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x2";
import Class2x3x3 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x3";
import Class2x3x4 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x4";
import Class2x3x5 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x5";
import Class2x3x6 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x6";
import Class2x3x7 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x7";
import Class2x3x8 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x8";
import Class2x3x9 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x9";
import Class2x3x10 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x10";
import Class2x3x11 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x11";
import Class2x3x12 from "../screens/ClassScreens/LearningScreens/Class2x3/Class2x3x12";
import Class2x4x1 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x1";
import Class2x4x2 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x2";
import Class2x4x3 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x3";
import Class2x4x4 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x4";
import Class2x4x5 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x5";
import Class2x4x6 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x6";
import Class2x4x7 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x7";
import Class2x4x8 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x8";
import Class2x4x9 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x9";
import Class2x4x10 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x10";
import Class2x4x11 from "../screens/ClassScreens/LearningScreens/Class2x4/Class2x4x11";
import Class2x5x1 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x1";
import Class2x5x2 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x2";
import Class2x5x3 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x3";
import Class2x5x4 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x4";
import Class2x5x5 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x5";
import Class2x5x6 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x6";
import Class2x5x7 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x7";
import Class2x5x8 from "../screens/ClassScreens/LearningScreens/Class2x5/Class2x5x8";
import Class2x6x1 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x1";
import Class2x6x2 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x2";
import Class2x6x3 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x3";
import Class2x6x4 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x4";
import Class2x6x5 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x5";
import Class2x6x6 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x6";
import Class2x6x7 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x7";
import Class2x6x8 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x8";
import Class2x6x9 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x9";
import Class2x6x10 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x10";
import Class2x6x11 from "../screens/ClassScreens/LearningScreens/Class2x6/Class2x6x11";
import Class2x7x1 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x1";
import Class2x7x2 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x2";
import Class2x7x3 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x3";
import Class2x7x4 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x4";
import Class2x7x5 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x5";
import Class2x7x6 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x6";
import Class2x7x7 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x7";
// import Class2x7x8 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x8";
// import Class2x7x9 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x9";
// import Class2x7x10 from "../screens/ClassScreens/LearningScreens/Class2x7/Class2x7x10";
import Exc1x1x1 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x1";
import Exc1x1x2 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x2";
import Exc1x1x3 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x3";
import Exc1x1x4 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x4";
import Exc1x1x5 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x5";
import Exc1x1x6 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x6";
import Exc1x1x7 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x7";
import Exc1x1x8 from "../screens/ClassScreens/ExerciseScreens/Exc1x1/Exc1x1x8";



const Stack = createStackNavigator(); 

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Main" component={Tabs} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="UpdatePassword" component={NewPasswordScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Reauth" component={ReAuthScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Forget" component={ForgetPassScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="LearnWord" component={LearnWordScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="TestWord" component={TestWordScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="ExitExcScreen" component={ExitExcScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="Reading" component={ReadingScreen} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="Text" component={TextScreen} options={{headerShown: false, animationEnabled: false}}/>
                <Stack.Screen name="ChangePic" component={ChangePictureScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="MyList" component={MyListScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="EditList" component={EditListScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="PublicLists" component={PublicListScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="CreateList" component={CreateListScreen} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x1" component={Class1x1x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x2" component={Class1x1x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x1" component={Class1x2x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x2" component={Class1x2x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x3" component={Class1x2x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x4" component={Class1x2x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x5" component={Class1x2x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x6" component={Class1x2x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x7" component={Class1x2x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x8" component={Class1x2x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x2x9" component={Class1x2x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x3" component={Class1x1x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x4" component={Class1x1x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x5" component={Class1x1x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x6" component={Class1x1x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x7" component={Class1x1x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x8" component={Class1x1x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x9" component={Class1x1x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x10" component={Class1x1x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x1" component={Class1x3x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x2" component={Class1x3x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x3" component={Class1x3x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x4" component={Class1x3x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x5" component={Class1x3x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x6" component={Class1x3x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x7" component={Class1x3x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x8" component={Class1x3x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x9" component={Class1x3x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x10" component={Class1x3x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x11" component={Class1x3x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x3x12" component={Class1x3x12} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x1" component={Class1x4x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x2" component={Class1x4x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x3" component={Class1x4x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x4" component={Class1x4x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x5" component={Class1x4x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x6" component={Class1x4x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x7" component={Class1x4x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x8" component={Class1x4x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x9" component={Class1x4x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x10" component={Class1x4x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x11" component={Class1x4x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x12" component={Class1x4x12} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x4x13" component={Class1x4x13} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x1" component={Class1x5x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x2" component={Class1x5x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x3" component={Class1x5x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x4" component={Class1x5x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x5" component={Class1x5x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x6" component={Class1x5x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x7" component={Class1x5x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x8" component={Class1x5x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x5x9" component={Class1x5x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x1" component={Class2x1x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x2" component={Class2x1x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x3" component={Class2x1x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x4" component={Class2x1x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x5" component={Class2x1x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x6" component={Class2x1x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x7" component={Class2x1x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x8" component={Class2x1x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x9" component={Class2x1x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x10" component={Class2x1x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x1x11" component={Class2x1x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x1" component={Class2x2x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x2" component={Class2x2x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x3" component={Class2x2x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x4" component={Class2x2x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x5" component={Class2x2x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x6" component={Class2x2x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x7" component={Class2x2x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x8" component={Class2x2x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x9" component={Class2x2x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x10" component={Class2x2x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x2x11" component={Class2x2x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x1" component={Class2x3x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x2" component={Class2x3x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x3" component={Class2x3x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x4" component={Class2x3x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x5" component={Class2x3x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x6" component={Class2x3x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x7" component={Class2x3x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x8" component={Class2x3x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x9" component={Class2x3x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x10" component={Class2x3x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x11" component={Class2x3x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x3x12" component={Class2x3x12} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x1" component={Class2x4x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x2" component={Class2x4x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x3" component={Class2x4x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x4" component={Class2x4x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x5" component={Class2x4x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x6" component={Class2x4x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x7" component={Class2x4x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x8" component={Class2x4x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x9" component={Class2x4x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x10" component={Class2x4x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x4x11" component={Class2x4x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x1" component={Class2x5x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x2" component={Class2x5x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x3" component={Class2x5x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x4" component={Class2x5x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x5" component={Class2x5x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x6" component={Class2x5x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x7" component={Class2x5x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x5x8" component={Class2x5x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x1" component={Class2x6x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x2" component={Class2x6x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x3" component={Class2x6x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x4" component={Class2x6x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x5" component={Class2x6x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x6" component={Class2x6x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x7" component={Class2x6x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x8" component={Class2x6x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x9" component={Class2x6x9} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x10" component={Class2x6x10} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x6x11" component={Class2x6x11} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x1" component={Class2x7x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x2" component={Class2x7x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x3" component={Class2x7x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x4" component={Class2x7x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x5" component={Class2x7x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x6" component={Class2x7x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class2x7x7" component={Class2x7x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x1" component={Exc1x1x1} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x2" component={Exc1x1x2} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x3" component={Exc1x1x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x4" component={Exc1x1x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x5" component={Exc1x1x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x6" component={Exc1x1x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x7" component={Exc1x1x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Exc1x1x8" component={Exc1x1x8} options={{headerShown: false, animationEnabled: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router;
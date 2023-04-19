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
import Class1x2x1 from "../screens/ClassScreens/LearningScreens/Class1x2/Class1x2x1";
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
                <Stack.Screen name="Class1x1x3" component={Class1x1x3} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x4" component={Class1x1x4} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x5" component={Class1x1x5} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x6" component={Class1x1x6} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x7" component={Class1x1x7} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x8" component={Class1x1x8} options={{headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name="Class1x1x9" component={Class1x1x9} options={{headerShown: false, animationEnabled: false }}/>
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
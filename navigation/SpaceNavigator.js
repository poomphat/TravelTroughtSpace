import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screen/mainScreen";
import PlanetInfo from "../screen/planetInfoScreen";
import Profile from "../component/Profile"
import MyloginPage from "../screen/loginScreen";
import solarSystemScreen from "../screen/solarsystemScreen";
import CommentList from "../component/commentList";
import Quiz from "../component/Quiz";
import Earth from "../planetPages/Earth"
import Jupiter from "../planetPages/Jupiter"
import Mars from "../planetPages/Mars"
import Mercury from "../planetPages/Mercury"
import Neptune from "../planetPages/Neptune"
import Saturn from "../planetPages/Saturn"
import Uranus from "../planetPages/Uranus"
import Venus from "../planetPages/Venus"

const planetNavigator = createStackNavigator(
    {
        loginScreen:MyloginPage,
        solarSystem:solarSystemScreen,
        mainScreen:MainScreen,
        profile:Profile,
        comment:CommentList,
        quiz:Quiz,
        Earth:Earth,
        Jupiter:Jupiter,
        Mars:Mars,
        Mercury:Mercury,
        Neptune:Neptune,
        Saturn:Saturn,
        Uranus:Uranus,
        Venus:Venus,
        
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
            gestureEnabled: false,
        },
      }

);

export default createAppContainer(planetNavigator);
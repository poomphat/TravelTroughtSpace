import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screen/mainScreen";
import PlanetInfo from "../screen/planetInfoScreen";
import Profile from "../component/Profile"
import MyloginPage from "../screen/loginScreen";
import solarSystemScreen from "../screen/solarsystemScreen";
import CommentList from "../component/commentList";
const planetNavigator = createStackNavigator(
    {
        loginScreen:MyloginPage,
        solarSystem:solarSystemScreen,
        mainScreen:MainScreen,
        planetInfo:PlanetInfo,
        profile:Profile,
        comment:CommentList,
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
      }

);

export default createAppContainer(planetNavigator);
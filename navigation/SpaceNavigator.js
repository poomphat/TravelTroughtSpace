import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screen/mainScreen";
import PlanetInfo from "../screen/planetInfoScreen";
import Profile from "../component/Profile"
import MyloginPage from "../screen/loginScreen";
import solarSystemScreen from "../screen/solarSystemScreen"
const planetNavigator = createStackNavigator(
    {
        loginScreen:MyloginPage,
        mainScreen:MainScreen,
        planetInfo:PlanetInfo,
        profile:Profile,
        solarSystem:solarSystemScreen,
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
      }

);

export default createAppContainer(planetNavigator);
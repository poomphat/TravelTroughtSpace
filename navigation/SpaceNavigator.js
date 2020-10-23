import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screen/mainScreen";
import PlanetInfo from "../screen/planetInfoScreen";
import Profile from "../component/Profile"
const planetNavigator = createStackNavigator(
    {
        mainScreen:MainScreen,
        planetInfo:PlanetInfo,
        profile:Profile,
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
      }

);

export default createAppContainer(planetNavigator);
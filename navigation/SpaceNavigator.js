import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screen/mainScreen";
import PlanetInfo from "../screen/planetInfoScreen";
const planetNavigator = createStackNavigator(
    {
        mainScreen:MainScreen,
        planetInfo:PlanetInfo,
    },
    {
        defaultNavigationOptions: {
            headerShown: false
        },
      }

);

export default createAppContainer(planetNavigator);
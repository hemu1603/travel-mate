import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import PlanTrip from "../PlanTrip";
import ViewOffers from "../ViewOffers";



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlanTrip" component={PlanTrip} />
      <Stack.Screen name="Offers" component={ViewOffers} />
    </Stack.Navigator>
  );
};

export default Navigation;
